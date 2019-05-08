import { Canvas, Document, FileImageResponse, FileResponse } from 'figma-js';
import nodeFetch, { Headers, Response } from 'node-fetch';
import * as prettier from 'prettier';
import isOnline from 'is-online';
import * as fs from 'fs-extra';
import cheerio from 'cheerio';
import * as path from 'path';
import * as _ from 'lodash';
import * as ejs from 'ejs';
import execa from 'execa';
import SVGO from 'svgo';
import { FILE_PATH_MANIFEST, FILE_PATH_REACT_COMPONENT } from './consts';
import {
  CodedError,
  ERRORS,
  IFigmaConfig,
  IIcons,
  IIconsSvgUrls,
  RequestInitWithRetry,
  IIconManifest,
} from './types';

const defaultRetry = {
  delay: 1000,
  retries: 2,
};

const transformers = {
  /**
   * Pass SVG through SVGO to reduce size.
   */
  async passSVGO(svgRaw: string) {
    const svgo = getSvgo();
    const { data } = await svgo.optimize(svgRaw);
    return data as string;
  },

  /**
   * Swaps out all colors (except for "non") for stroke and fill to "currentColor".
   */
  injectCurrentColor(svgRaw: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true });
    $('*').each((i, el) => {
      Object.keys(el.attribs).forEach(attrKey => {
        if (['fill', 'stroke'].includes(attrKey)) {
          const val = $(el).attr(attrKey);
          if (val !== 'none') {
            $(el).attr(attrKey, 'currentColor');
          }
        }
      });
    });

    return $.xml();
  },

  prettify(svgRaw: string) {
    const prettierOptions = prettier.resolveConfig.sync(process.cwd());
    return prettier.format(svgRaw, { ...prettierOptions, parser: 'html' });
  },

  readyForJSX(svgRaw: string) {
    const $ = cheerio.load(svgRaw, { xmlMode: true });
    $('*').each((i, el) => {
      Object.keys(el.attribs).forEach(attrKey => {
        if (attrKey.includes('-')) {
          $(el)
            .attr(_.camelCase(attrKey), el.attribs[attrKey])
            .removeAttr(attrKey);
        }
        if (attrKey === 'class') {
          $(el)
            .attr('className', el.attribs[attrKey])
            .removeAttr(attrKey);
        }
      });
    });

    return $('svg')
      .attr('props', '...')
      .toString()
      .replace(/stroke=['|"]currentColor['|"]/g, 'stroke={color}')
      .replace(/fill=['|"]currentColor['|"]/g, 'stroke={color}')
      .replace('props="..."', '{...props}');
  },
};

let currentOnlineCheck = null;

function fetch(
  url: string,
  fetchOptions: RequestInitWithRetry = {}
): Promise<Response> {
  const retryOptions = { ...defaultRetry, ...fetchOptions.retry };
  return new Promise((resolve, reject) => {
    const attemptFetch = (remainingRetries: number) => {
      nodeFetch(url, fetchOptions)
        .then(res => {
          resolve(res);
        })
        .catch(async err => {
          if (remainingRetries > 0) {
            await asyncDelay(retryOptions.delay);
            attemptFetch(--remainingRetries);
          } else {
            if (!currentOnlineCheck) {
              currentOnlineCheck = isOnline();
            }
            const isOn = await currentOnlineCheck;
            currentOnlineCheck = null;
            if (!isOn) {
              reject(
                new CodedError(
                  ERRORS.NETWORK_OFFLINE,
                  'An internet connection is required to find and render Icons.'
                )
              );
            } else {
              reject(err);
            }
          }
        });
    };

    attemptFetch(retryOptions.retries);
  });
}

export function createFigmaConfig(fileKey: string): IFigmaConfig {
  return {
    baseUrl: 'https://api.figma.com',
    fileKey,
    headers: new Headers({
      'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN,
    }),
  };
}

export async function getFigmaDocument(
  config: IFigmaConfig
): Promise<Document> {
  const resp = await fetch(`${config.baseUrl}/v1/files/${config.fileKey}`, {
    headers: config.headers,
  });
  const data = (await resp.json()) as FileResponse;
  return data.document;
}

export async function renderIdsToSvgs(
  ids: string[],
  config: IFigmaConfig
): Promise<IIconsSvgUrls> {
  const resp = await fetch(
    `${config.baseUrl}/v1/images/${config.fileKey}?ids=${ids}&format=svg`,
    {
      headers: config.headers,
    }
  );

  // We can't be sure the response, when an error, will have a body that can be streamed to JSON.
  let data: FileImageResponse = {
    err: null,
    images: {},
  };
  if (resp.headers.get('content-type').includes('application/json')) {
    data = (await resp.json()) as FileImageResponse;
  }
  const error =
    typeof data.err === 'object' ? JSON.stringify(data.err, null, 2) : data.err;

  if (!resp.ok) {
    switch (resp.status) {
      case 400:
        throw new CodedError(
          ERRORS.FIGMA_API,
          `Unexpected error encountered from Figma API\n${error}`
        );
      case 404:
        throw new CodedError(
          ERRORS.FIGMA_API,
          "One or more of the icons couldn't be found in Figma. Check to see if they still exist, and try again."
        );
      case 500:
        throw new CodedError(
          ERRORS.FIGMA_API,
          'Figma could not render the icons. ಠ_ಠ'
        );
      default:
        throw new CodedError(
          ERRORS.UNEXPECTED,
          `An error occured while rendering icons to SVG.\n${
            resp.status
          }\n${error}`
        );
    }
  }

  if (!data.images || !Object.keys(data.images).length) {
    throw new CodedError(
      ERRORS.UNEXPECTED,
      `An error occured after rendering icons in Figma. Render response:\n${JSON.stringify(
        data,
        null,
        2
      )}`
    );
  }

  return data.images;
}

export function getIconsPage(document: Document): Canvas | null {
  const canvas = document.children.find(
    page => page.name.toLowerCase() === 'icons'
  );

  return canvas && canvas.type === 'CANVAS' ? canvas : null;
}

export function getIcons(iconsCanvas: Canvas): IIcons {
  return iconsCanvas.children.reduce((icons: IIcons, iconSetNode) => {
    // We technically don't want icon sets to be in Groups, but we should still allow it
    if (iconSetNode.type === 'FRAME' || iconSetNode.type === 'GROUP') {
      iconSetNode.children.forEach(iconNode => {
        // Our individual icons frames may be Figma "Components" 🤙
        if (iconNode.type === 'FRAME' || iconNode.type === 'COMPONENT') {
          icons[iconNode.id] = {
            id: iconNode.id,
            name: iconNode.name,
            path: iconSetNode.name,
          };
        }

        return icons;
      });
    }
    return icons;
  }, {});
}

export async function downloadSvgsToFs(
  urls: IIconsSvgUrls,
  icons: IIcons,
  onProgress: () => void
) {
  const iconIds = Object.keys(urls);
  const processedFiles = [...iconIds];
  await Promise.all(
    Object.keys(urls).map(async iconId => {
      const svg = await (await fetch(urls[iconId]))
        .text()
        .then(async svgRaw => transformers.passSVGO(svgRaw))
        .then(svgRaw => transformers.injectCurrentColor(svgRaw))
        .then(svgRaw => transformers.prettify(svgRaw));
      const svgPath = path.join(
        icons[iconId].path,
        `${icons[iconId].name}.svg`
      );
      await fs.outputFile(path.resolve(process.cwd(), svgPath), svg, {
        encoding: 'utf8',
      });
      onProgress();

      // We retain the ordering of the array by icon id's because the positioning
      // of the icons in the Figma file can influence defaults in generated code.
      processedFiles[processedFiles.indexOf(iconId)] = svgPath;
    })
  );
  return processedFiles;
}

const iconPathTo = {
  name(namePath) {
    return path.basename(namePath, '.svg');
  },
  size(namePath) {
    return path.basename(path.dirname(namePath));
  },
  category(namePath) {
    const cat = path.dirname(path.dirname(namePath));
    return cat === '.' ? '' : cat;
  },
};

export function filepathsToIconManifest(
  processedFiles: string[]
): IIconManifest {
  return processedFiles.reduce((iconManifest: IIconManifest, filePath) => {
    _.setWith(
      iconManifest,
      [
        iconPathTo.category(filePath),
        iconPathTo.size(filePath),
        iconPathTo.name(filePath),
      ],
      filePath,
      Object
    );
    return iconManifest;
  }, {});
}

export async function filePathToSVGinJSX(filePath) {
  const absFilePath = path.resolve(process.cwd(), filePath);
  const svgRaw = await fs.readFile(absFilePath, { encoding: 'utf8' });
  return transformers.readyForJSX(svgRaw);
}

export async function generateReactComponents(filePaths: string[]) {
  const ICON_TEMPLATE_FILE_PATH = path.resolve(
    __dirname,
    './templates/icon.tsx.ejs'
  );
  const ICON_TSX_ABSOLUTE_PATH = path.resolve(
    process.cwd(),
    FILE_PATH_REACT_COMPONENT
  );
  const iconManifest = filepathsToIconManifest(filePaths);
  const iconFileTemplate = await fs.readFile(ICON_TEMPLATE_FILE_PATH, {
    encoding: 'utf8',
  });
  const templateData = {
    iconManifest,
    _: _,
    filePathToSVGinJSX,
    componentName(type, size, name) {
      const pascal = str => _.upperFirst(_.camelCase(str));
      return `${pascal(name)}${pascal(type)}${pascal(size)}Icon`;
    },
    propsInterfaceName(type, size, name) {
      return `${templateData.componentName(type, size, name)}Props`;
    },
  };
  let reactComponentRaw = await ejs.render(iconFileTemplate, templateData, {
    async: true,
  });
  const prettierOptions = prettier.resolveConfig.sync(process.cwd());
  reactComponentRaw = prettier.format(reactComponentRaw, {
    ...prettierOptions,
    parser: 'typescript',
  });
  await fs.outputFile(ICON_TSX_ABSOLUTE_PATH, reactComponentRaw);
}

export async function getCurrentIconManifest() {
  const ICON_MANIFEST_ABSOLUTE_PATH = path.resolve(
    process.cwd(),
    FILE_PATH_MANIFEST
  );
  return (await fs.readJSON(ICON_MANIFEST_ABSOLUTE_PATH, {
    encoding: 'utf8',
  })) as {};
}

export async function generateIconManifest(filePaths: string[]) {
  const ICON_MANIFEST_ABSOLUTE_PATH = path.resolve(
    process.cwd(),
    FILE_PATH_MANIFEST
  );
  const iconManifest = filepathsToIconManifest(filePaths);
  let iconManifestRaw = JSON.stringify(iconManifest);
  const prettierOptions = prettier.resolveConfig.sync(process.cwd());
  iconManifestRaw = prettier.format(iconManifestRaw, {
    ...prettierOptions,
    parser: 'json',
  });
  const previousIconManifest = await getCurrentIconManifest();
  await fs.writeFile(ICON_MANIFEST_ABSOLUTE_PATH, iconManifestRaw, {
    encoding: 'utf8',
  });
  return [previousIconManifest, iconManifest];
}

export async function attemptToRemoveDeletedIconSVGs(
  previousIconManifest: IIconManifest,
  nextIconManifest: IIconManifest
) {
  let deletedIconsAsSVGPaths = [];
  const assignRemovedPropAccessorsRecursive = (
    a: IIconManifest,
    b: IIconManifest,
    accessor: any[] = []
  ) => {
    _.forEach(accessor.length ? _.get(a, accessor) : a, (v, k) => {
      if (v == null) return;
      const currentAccessor = accessor.concat(k);
      if (typeof v === 'object') {
        assignRemovedPropAccessorsRecursive(a, b, currentAccessor);
      }
      if (typeof v === 'string') {
        const leafNodeB = _.get(b, currentAccessor);
        if (leafNodeB == null) {
          const leafNodeA = _.get(a, currentAccessor);
          deletedIconsAsSVGPaths.push(leafNodeA);
        }
      }
    });
  };

  assignRemovedPropAccessorsRecursive(previousIconManifest, nextIconManifest);

  for (const i in deletedIconsAsSVGPaths) {
    const filePath = deletedIconsAsSVGPaths[i];
    await fs.unlink(path.resolve(process.cwd(), filePath));
  }

  return deletedIconsAsSVGPaths;
}

export async function getGitNumStat(files: string[]) {
  const { stdout: gitRootDir } = await execa('git', [
    'rev-parse',
    '--show-toplevel',
  ]);
  await execa('git', [
    'add',
    '-f',
    '--ignore-removal',
    '--intent-to-add',
    ...files,
  ]);
  const [{ stdout: numstatRaw }, { stdout: nameStatRaw }] = await Promise.all([
    execa('git', ['diff', '--numstat', '--no-renames']),
    execa('git', ['diff', '--name-status', '--no-renames']),
  ]);

  const nameStat = nameStatRaw.split('\n').map(line => line[0]);
  const numstat = numstatRaw
    .split('\n')
    .map(line => line.split('\t'))
    .map(([additions, deletions, filePath], i) => {
      return {
        status: nameStat[i] || 'M',
        additions: parseInt(additions, 10),
        deletions: parseInt(deletions, 10),
        filePath: filePath
          .replace(path.relative(gitRootDir, process.cwd()), '')
          .replace(/^\//, ''),
        fullFilePath: filePath,
      };
    })
    .filter(fileSummary => files.includes(fileSummary.filePath));

  await execa('git', ['reset', 'HEAD', ...files], { cwd: gitRootDir });

  return numstat;
}

function asyncDelay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

let svgo = null;

function getSvgo() {
  if (svgo) return svgo;
  svgo = new SVGO({
    plugins: [
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeXMLNS: false },
      { removeEditorsNSData: true },
      { cleanupAttrs: true },
      { minifyStyles: true },
      { convertStyleToAttrs: true },
      { cleanupIDs: true },
      { removeRasterImages: false },
      { removeUselessDefs: true },
      { cleanupNumericValues: true },
      { cleanupListOfValues: false },
      { convertColors: true },
      { removeUnknownsAndDefaults: true },
      { removeNonInheritableGroupAttrs: true },
      { removeUselessStrokeAndFill: true },
      { removeViewBox: true },
      { cleanupEnableBackground: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { convertShapeToPath: true },
      { moveElemsAttrsToGroup: true },
      { moveGroupAttrsToElems: true },
      { collapseGroups: true },
      { convertPathData: true },
      { convertTransform: true },
      { removeEmptyAttrs: true },
      { removeEmptyContainers: true },
      { mergePaths: true },
      { removeUnusedNS: true },
      { sortAttrs: false },
      { removeTitle: true },
      { removeDesc: true },
      { removeDimensions: false },
      { removeStyleElement: false },
      { removeScriptElement: false },
    ],
  });
  return svgo;
}

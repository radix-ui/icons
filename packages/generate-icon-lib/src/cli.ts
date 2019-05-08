import path from 'path';
import meow from 'meow';
import chalk from 'chalk';
import isOnline from 'is-online';
import { CodedError, ERRORS } from './types';
import { FILE_PATH_MANIFEST, FILE_PATH_REACT_COMPONENT } from './consts';
import {
  createFigmaConfig,
  getFigmaDocument,
  getIconsPage,
  getIcons,
  renderIdsToSvgs,
  downloadSvgsToFs,
  getGitNumStat,
  generateReactComponents,
  generateIconManifest,
  getCurrentIconManifest,
  attemptToRemoveDeletedIconSVGs,
} from './services';
import { render, unmount } from './view';
import { Box, Color } from 'ink';
import React from 'react';

async function main() {
  prechecks();
  const cli = meow(
    `
	Usage
	  $ ${path.basename(process.argv[1])} --file=<file-key>

	Options
	  --file, -f    File Key from Figma
	  --help        Show this message

	Examples
	  $ ${path.basename(process.argv[1])} --file=EEggMA9IV81CYzCSI8LFEUOY
`,
    {
      hardRejection: false,
      flags: {
        file: {
          type: 'string',
          alias: 'f',
        },
      },
    }
  );

  if (!cli.flags.file) {
    cli.showHelp(1);
  }

  const figmaConfig = createFigmaConfig(cli.flags.file);
  render({ fileKey: cli.flags.file });

  /* 1. Request the figma document, to source all visual nodes */
  render({
    spinners: [{ text: 'Finding the file in Figma...' }],
  });

  const document = await getFigmaDocument(figmaConfig);
  render({
    spinners: [
      { success: true, text: 'Found the Figma file 👌' },
      { text: 'Finding all Icons in the designs...' },
    ],
  });

  /* 2. Filter nodes for our Icons page */
  const iconsCanvas = getIconsPage(document);
  if (!iconsCanvas) {
    throw new CodedError(
      ERRORS.NO_ICONS_PAGE,
      'Expected an "Icons" page to exist in the Figma File. Please rename your primary page to "Icons" if you have not already.'
    );
  }

  /* 3. Transform the Icons page into a flat dictionary of icons, labeled by their path */
  const icons = getIcons(iconsCanvas);
  const iconIds = Object.keys(icons);
  if (!iconIds.length) {
    throw new CodedError(
      ERRORS.NO_ICONS_IN_SETS,
      'Expected one or more icon-sets to be in the "Icons" page. Please try again when you have created Frames to group icon-sets; refer to documentation for more details.'
    );
  }

  /* 4. Request Figma services to render Icon nodes as individual SVGs */
  render({
    spinners: [{ text: 'Rendering on the Figma platform...' }],
  });
  const iconSvgUrls = await renderIdsToSvgs(iconIds, figmaConfig);

  /* 4. Pull down all rendered SVGs to update our local working package */
  render({
    spinners: [
      {
        success: true,
        text: 'Rendered Icons on the Figma platform 🙌',
      },
    ],
    progress: {
      text: 'Gathering Figma renders...',
      percent: 0,
    },
  });

  let downloadsCompleted = 0;
  let processedSvgFiles = await downloadSvgsToFs(iconSvgUrls, icons, () => {
    downloadsCompleted += 1;
    render({
      progress: {
        text: 'Gathering Figma renders...',
        percent: downloadsCompleted / iconIds.length,
      },
    });
  });

  render({
    spinners: [
      {
        success: true,
        text: 'Downloaded and processed SVG renders 👍',
      },
      {
        text: 'Generating React Components...',
      },
    ],
  });

  /* 5. Generate React Components from the SVGs */

  const reactComponentFilePath = await generateReactComponents(
    processedSvgFiles
  );

  render({
    spinners: [
      {
        success: true,
        text: 'Created React Components ⚛️ ✨',
      },
      {
        text: 'Generating icon manifest...',
      },
    ],
  });

  /* 6. Generate React Components from the SVGs */

  const [previousIconManifest, nextIconManifest] = await generateIconManifest(
    processedSvgFiles
  );

  render({
    spinners: [
      {
        success: true,
        text: 'Created Icon Manifest 📓 🔥',
      },
    ],
  });

  /* 7. Detect and attempt to remove deleted icons */

  const deletedSvgFiles = await attemptToRemoveDeletedIconSVGs(
    previousIconManifest,
    nextIconManifest
  );

  if (deletedSvgFiles.length > 0) {
    render({
      spinners: [
        {
          success: true,
          text: 'Cleaned deleted Icons 💇‍',
        },
      ],
    });
  }

  /* 8. Finish. Print stats. */

  try {
    render({
      diff: await getGitNumStat([
        ...processedSvgFiles,
        ...deletedSvgFiles,
        FILE_PATH_REACT_COMPONENT,
        FILE_PATH_MANIFEST,
      ]),
    });
  } catch (err) {
    console.error(err);
    // Swallow git errors, and continue with closing the CLI. 🤙
  }

  unmount();
}

function prechecks() {
  isOnline().then(isOn => {
    if (!isOn) {
      throw new CodedError(
        ERRORS.NETWORK_OFFLINE,
        'An internet connection is required to find and render Icons.'
      );
    }
  });
}

function handleError(err) {
  unmount();
  console.log('');
  if (err instanceof CodedError) {
    console.error(
      `${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(
        ` ${err.code} `
      )}
${err.message}
${chalk.dim(err.stack ? err.stack.replace(/^.*\n/, '') : '')}`.trim()
    );
    process.exit(1);
  } else {
    console.log(
      `${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(
        ' UNHANDLED '
      )}\n`
    );
    console.error(err);
    process.exit(1);
  }
}

main()
  .then(() => {
    console.log('Bai 👋');
  })
  .catch(handleError);

process.addListener('unhandledRejection', handleError);

import { CodedError, ERRORS, RequestInitWithRetry } from './types';
import nodeFetch, { Response } from 'node-fetch';
import isOnline from 'is-online';
import * as _ from 'lodash';
import SVGO from 'svgo';
import { unmount } from './view';
import chalk from 'chalk';

export function handleError(err, exit = true) {
  unmount();
  console.log('');
  if (err instanceof CodedError) {
    console.error(
      `${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(` ${err.code} `)}
${err.message}
${chalk.dim(!(err.hideStack && err.stack) ? err.stack.replace(/^.*\n/, '') : '')}`.trim()
    );
  } else {
    console.log(`${chalk.red.bold('ERROR: ')}${chalk.bgRed.black.bold.inverse(' UNHANDLED ')}\n`);
    console.error(err);
  }

  if (exit) {
    process.exit(1);
  }
}

let currentOnlineCheck = null;

const defaultRetry = {
  delay: 1000,
  retries: 2,
};

export function fetch(url: string, fetchOptions: RequestInitWithRetry = {}): Promise<Response> {
  const retryOptions = { ...defaultRetry, ...fetchOptions.retry };
  return new Promise((resolve, reject) => {
    const attemptFetch = (remainingRetries: number) => {
      nodeFetch(url, fetchOptions)
        .then((res) => {
          resolve(res);
        })
        .catch(async (err) => {
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
                new CodedError(ERRORS.NETWORK_OFFLINE, 'An internet connection is required to find and render Icons.')
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

function asyncDelay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

export function pushObjLeafNodesToArr(obj: {}, arr: string[], accessor: any[] = []) {
  _.forEach(accessor.length ? _.get(obj, accessor) : obj, (v, k) => {
    if (v == null) return;
    const currentAccessor = accessor.concat(k);
    if (typeof v === 'object') {
      pushObjLeafNodesToArr(obj, arr, currentAccessor);
    }
    if (typeof v === 'string') {
      arr.push(_.get(obj, currentAccessor));
    }
  });
}

let svgo = null;

export function getSvgo() {
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
      { removeViewBox: false },
      { cleanupEnableBackground: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { convertShapeToPath: true },
      { moveElemsAttrsToGroup: true },
      { moveGroupAttrsToElems: true },
      { collapseGroups: true },
      { convertPathData: false },
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

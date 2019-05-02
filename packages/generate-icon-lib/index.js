#! /usr/bin/env node

/*
|-------------------------------------------------------------------------------
| Setup CLI with env and typescript support.
| We don't have to bother compiling the TS because this package isn't published.
*/
const path = require('path');
const fs = require('fs-extra');
require('ts-node').register({
  ...fs.readJSONSync(path.resolve(__dirname, 'tsconfig.json')),
});
require('dotenv').config({
  path: path.resolve(process.cwd(), '.env'),
});

/*
|-------------------------------------------------------------------------------
| Start the CLI! Vroom vroom
*/
require('./src/cli.ts');

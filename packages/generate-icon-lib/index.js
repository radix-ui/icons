#! /usr/bin/env node
// @ts-check

/*
|-------------------------------------------------------------------------------
| Setup CLI with env and typescript support.
| We don't have to bother compiling the TS because this package isn't published.
*/
import path from "path";
import { tsImport } from "tsx/esm/api";
import dotenv from "dotenv";

dotenv.config({
	path: path.resolve(process.cwd(), ".env"),
});

/*
|-------------------------------------------------------------------------------
| Start the CLI! Vroom vroom
*/

await tsImport("./src/cli.ts", import.meta.url);

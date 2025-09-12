// @ts-check
import * as react from "@chance/eslint/react";
import * as js from "@chance/eslint";
import * as typescript from "@chance/eslint/typescript";
import { globals } from "@chance/eslint/globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{ ignores: ["node_modules", "**/dist"] },
	{ ...js.getConfig({ ...globals.node, ...globals.browser }) },
	typescript.config,
	{
		...react.config,
		rules: {
			...react.rules,
			"react/forbid-foreign-prop-types": "off",
		},
	},
];

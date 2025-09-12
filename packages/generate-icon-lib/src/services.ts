import * as prettier from "prettier";
import isOnline from "is-online";
import { temporaryDirectory } from "tempy";
import * as fse from "fs-extra/esm";
import * as fs from "fs";
import * as cheerio from "cheerio";
import * as path from "path";
import * as _ from "lodash-es";
import * as ejs from "ejs";
import { execa } from "execa";
import {
	FILE_PATH_MANIFEST,
	FILE_PATH_ENTRY,
	FILE_PATH_TYPES,
	FOLDER_PATH_ICONS,
} from "./consts.js";
import type {
	IFigmaConfig,
	IIcons,
	IIconsSvgUrls,
	IIconManifest,
	IIcon,
	IDiffSummary,
	ITemplateIcon,
	IFigmaCanvas,
	IFigmaDocument,
	IFigmaFileImageResponse,
	IFigmaFileResponse,
} from "./types.js";
import { CodedError, ERRORS } from "./types.js";
import * as svgo from "svgo";
import { fetch, pushObjLeafNodesToArr, handleError } from "./utils.js";
import chalk from "chalk";

const transformers = {
	/**
	 * Pass SVG through SVGO to reduce size.
	 */
	async passSVGO(svgRaw: string) {
		const { data } = svgo.optimize(svgRaw, {
			plugins: [
				"removeDoctype",
				"removeXMLProcInst",
				"removeComments",
				"removeMetadata",
				// "removeXMLNS",
				"removeEditorsNSData",
				"cleanupAttrs",
				"minifyStyles",
				"convertStyleToAttrs",
				"cleanupIds",
				"removeRasterImages",
				"removeUselessDefs",
				"cleanupNumericValues",
				// "cleanupListOfValues",
				"convertColors",
				"removeUnknownsAndDefaults",
				"removeNonInheritableGroupAttrs",
				"removeUselessStrokeAndFill",
				// "removeViewBox",
				"cleanupEnableBackground",
				"removeHiddenElems",
				"removeEmptyText",
				"convertShapeToPath",
				"moveElemsAttrsToGroup",
				"moveGroupAttrsToElems",
				"collapseGroups",
				// "convertPathData",
				"convertTransform",
				"removeEmptyAttrs",
				"removeEmptyContainers",
				"mergePaths",
				"removeUnusedNS",
				// "sortAttrs",
				"removeTitle",
				"removeDesc",
				// "removeDimensions",
				// "removeStyleElement",
				// "removeScripts",
			],
		});
		return data;
	},

	/**
	 * Swaps out all colors (except for "non") for stroke and fill to "currentColor".
	 */
	injectCurrentColor(svgRaw: string) {
		const $ = cheerio.load(svgRaw, { xmlMode: true });
		$("*").each((i, el) => {
			if (isTagElement(el)) {
				Object.keys(el.attribs).forEach((attrKey) => {
					if (["fill", "stroke"].includes(attrKey)) {
						const val = $(el).attr(attrKey);
						if (val !== "none") {
							$(el).attr(attrKey, "currentColor");
						}
					}
				});
			}
		});

		return $.xml();
	},

	async prettify(svgRaw: string) {
		const prettierOptions = await prettier.resolveConfig(process.cwd());
		return await prettier.format(svgRaw, {
			...prettierOptions,
			parser: "html",
		});
	},

	readyForJSX(svgRaw: string) {
		const $ = cheerio.load(svgRaw, { xmlMode: true });
		$("*").each((_i, el) => {
			if (isTagElement(el)) {
				Object.keys(el.attribs).forEach((attrKey) => {
					if (attrKey.includes("-")) {
						$(el)
							.attr(_.camelCase(attrKey), el.attribs[attrKey])
							.removeAttr(attrKey);
					}
					if (attrKey === "class") {
						$(el).attr("className", el.attribs[attrKey]).removeAttr(attrKey);
					}
				});
			}
		});

		return $("svg")
			.attr("props", "...")
			.attr("ref", "forwardedRef")
			.toString()
			.replace(/stroke=['|"]currentColor['|"]/g, "stroke={color}")
			.replace(/fill=['|"]currentColor['|"]/g, "fill={color}")
			.replace('props="..."', "{...props}")
			.replace('ref="forwardedRef"', "ref={forwardedRef}");
	},
};

const labelling = {
	typeFromFrameNodeName(nodeName: string): string {
		const base = path.dirname(nodeName);
		const trimmed = base.trim();
		const camelCased = _.camelCase(trimmed);
		return camelCased;
	},
	sizeFromFrameNodeName(nodeName: string): string {
		// Note: We ensure ordering by assignment-time in the object, and avoid numerical
		// key ordering, by adding a non-numerical to the key.
		return labelling.addSizePrefix(
			path.basename(nodeName).toLowerCase().trim(),
		);
	},
	filePathFromIcon(icon: IIcon): string {
		return path.join(
			icon.type,
			labelling.stripSizePrefix(icon.size),
			`${icon.svgName}.svg`,
		);
	},
	stripSizePrefix(size: string) {
		return size.replace(/^:?(.*)/, "$1");
	},
	addSizePrefix(size: string) {
		return `:${size.replace(/^(:?)(.*)/, "$2")}`;
	},
};

let currentTempDir = temporaryDirectory();

let currentListOfAddedFiles: string[] = [];

export async function prechecks() {
	/* We can't work offline. */
	isOnline().then((isOn) => {
		if (!isOn) {
			throw new CodedError(
				ERRORS.NETWORK_OFFLINE,
				"An internet connection is required to find and render Icons.",
				true,
			);
		}
	});

	/* We don't want to end up deleted work-in-progress. */
	const [{ stdout: trackedFiles }, { stdout: untrackedFiles }] =
		await Promise.all([
			// Checks for uncommitted changes.
			execa("git", ["diff-index", "HEAD", "--", FOLDER_PATH_ICONS]),
			// Checks for untracked files.
			execa("git", [
				"ls-files",
				"--others",
				"--exclude-standard",
				FOLDER_PATH_ICONS,
			]),
		]);
	if (trackedFiles.length > 0 || untrackedFiles.length > 0) {
		handleError(
			new CodedError(
				ERRORS.DIRTY_WORKING_DIR,
				"There are uncommitted or untracked files in the working directory.\nPlease commit, stash, or remove them. Then try again.",
				true,
			),
			false,
		);
		console.error(`
${chalk.bold("Git Status")} ${chalk.dim(
			`(${["--no-renames", "--untracked-files", "--short", "--", FOLDER_PATH_ICONS].join(" ")})`,
		)}
`);
		await execa(
			"git",
			[
				"status",
				"--no-renames",
				"--untracked-files",
				"--short",
				"--",
				FOLDER_PATH_ICONS,
			],
			{
				stdio: "inherit",
			},
		);
		process.exit(1);
	}
}

export function createFigmaConfig(fileKey: string): IFigmaConfig {
	const token = process.env.FIGMA_ACCESS_TOKEN;
	if (!token) {
		throw new CodedError(
			ERRORS.FIGMA_API,
			"An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.",
		);
	}
	return {
		baseUrl: "https://api.figma.com",
		fileKey,
		headers: new Headers({
			"X-Figma-Token": token,
		}),
	};
}

export async function getFigmaDocument(
	config: IFigmaConfig,
): Promise<IFigmaDocument> {
	const resp = await fetch(`${config.baseUrl}/v1/files/${config.fileKey}`, {
		headers: config.headers,
	});
	const data = (await resp.json()) as IFigmaFileResponse;
	if (data.status === 403 && data.err === "Invalid token") {
		throw new CodedError(
			ERRORS.FIGMA_API,
			"An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.",
		);
	}
	return data.document;
}

export async function renderIdsToSvgs(
	ids: string[],
	config: IFigmaConfig,
): Promise<IIconsSvgUrls> {
	const resp = await fetch(
		`${config.baseUrl}/v1/images/${config.fileKey}?ids=${ids}&format=svg`,
		{
			headers: config.headers,
		},
	);

	// We can't be sure the response, when an error, will have a body that can be streamed to JSON.
	let data: IFigmaFileImageResponse = {
		err: undefined,
		images: {},
	};
	if (resp.headers.get("content-type")?.includes("application/json")) {
		data = (await resp.json()) as IFigmaFileImageResponse;
	}
	const error =
		typeof data.err === "object" ? JSON.stringify(data.err, null, 2) : data.err;

	if (!resp.ok) {
		switch (resp.status) {
			case 400:
				throw new CodedError(
					ERRORS.FIGMA_API,
					`Unexpected error encountered from Figma API\n${error}`,
				);
			case 404:
				throw new CodedError(
					ERRORS.FIGMA_API,
					"One or more of the icons couldn't be found in Figma. Check to see if they still exist, and try again.",
				);
			case 500:
				throw new CodedError(
					ERRORS.FIGMA_API,
					"Figma could not render the icons. ಠ_ಠ",
				);
			default:
				throw new CodedError(
					ERRORS.UNEXPECTED,
					`An error occured while rendering icons to SVG.\n${resp.status}\n${error}`,
				);
		}
	}

	if (!data.images || !Object.keys(data.images).length) {
		throw new CodedError(
			ERRORS.UNEXPECTED,
			`An error occured after rendering icons in Figma. Render response:\n${JSON.stringify(data, null, 2)}`,
		);
	}

	return data.images;
}

export function getIconsPage(document: IFigmaDocument): IFigmaCanvas | null {
	const canvas = document.children.find(
		(page) => page.name.toLowerCase() === "icons",
	);

	return canvas && canvas.type === "CANVAS" ? canvas : null;
}

export function getIcons(iconsCanvas: IFigmaCanvas): IIcons {
	return iconsCanvas.children.reduce((icons: IIcons, iconSetNode) => {
		// We technically don't want icon sets to be in Groups, but we should still allow it
		if (iconSetNode.type === "FRAME" || iconSetNode.type === "GROUP") {
			iconSetNode.children.forEach((iconGroupNode) => {
				// Icons are grouped in frames
				if (iconGroupNode.type === "FRAME") {
					iconGroupNode.children.forEach((iconNode) => {
						// Our individual icons are Figma "Components"
						if (iconNode.type === "COMPONENT") {
							// 'Break Link' => 'break-link'
							// 'GitHub Logo' => 'github-logo'
							const svgName = _.kebabCase(iconNode.name.toLowerCase());

							// We insert whitespace between lower and uppercase letters
							// to make sure that lodash preserves existing camel-casing.
							// 'Break Link' => 'BreakLink'
							// 'GitHub Logo' => 'GitHubLogo'
							const jsxName = _.upperFirst(
								_.camelCase(
									iconNode.name.replace(/([0-9a-z])([0-9A-Z])/g, "$1 $2"),
								),
							);

							icons[iconNode.id] = {
								jsxName,
								svgName,
								id: iconNode.id,
								size: labelling.sizeFromFrameNodeName(iconSetNode.name),
								type: labelling.typeFromFrameNodeName(iconSetNode.name),
							};
						}
					});
				}
			});
		}
		return icons;
	}, {});
}

export async function downloadSvgsToFs(
	urls: IIconsSvgUrls,
	icons: IIcons,
	onProgress: () => void,
) {
	await Promise.all(
		Object.keys(urls).map(async (iconId) => {
			const processedSvg = await (
				await fetch(urls[iconId])
			)
				.text()
				.then((svgRaw) => transformers.passSVGO(svgRaw))
				.then((svgRaw) => transformers.injectCurrentColor(svgRaw));

			const filePath = path.resolve(
				currentTempDir,
				labelling.filePathFromIcon(icons[iconId]),
			);
			await fse.outputFile(filePath, processedSvg, { encoding: "utf8" });
			currentListOfAddedFiles.push(filePath);
			onProgress();
		}),
	);
}

export function iconsToManifest(icons: IIcons): IIconManifest {
	return Object.keys(icons).reduce((iconManifest: IIconManifest, iconId) => {
		const icon = icons[iconId];

		if (!iconManifest[icon.type]) {
			iconManifest[icon.type] = {};
		}
		if (!iconManifest[icon.type][icon.size]) {
			iconManifest[icon.type][icon.size] = {};
		}
		if (!iconManifest[icon.type][icon.size][icon.svgName]) {
			iconManifest[icon.type][icon.size][icon.svgName] =
				labelling.filePathFromIcon(icon);
		}

		return iconManifest;
	}, {});
}

export function iconsToSvgPaths(icons: IIcons) {
	return Object.keys(icons).map((iconId) =>
		labelling.filePathFromIcon(icons[iconId]),
	);
}

export function filePathToSVGinJSXSync(filePath: string) {
	const absFilePath = path.resolve(currentTempDir, filePath);
	const svgRaw = fs.readFileSync(absFilePath, { encoding: "utf8" });
	return transformers.readyForJSX(svgRaw);
}

export async function generateReactComponents(icons: IIcons) {
	const getTemplateSource = (templateFile: string) =>
		fs.promises.readFile(
			path.resolve(import.meta.dirname, "./templates/", templateFile),
			{ encoding: "utf8" },
		);
	const templates = {
		entry: await getTemplateSource("entry.tsx.ejs"),
		icon: await getTemplateSource("named-icon.tsx.ejs"),
		types: await getTemplateSource("types.tsx"),
	};
	const firstIcon = Object.values(icons)[0];
	const iconsWithVariants = Object.values<ITemplateIcon>(
		Object.keys(icons).reduce(
			(iconsWithVariants: { [name: string]: ITemplateIcon }, iconId) => {
				const icon = iconsWithVariants[icons[iconId].svgName] || {
					ids: [],
					sizes: [],
					types: [],
					svgName: icons[iconId].svgName,
					jsxName: icons[iconId].jsxName,
				};
				icon.ids = _.uniq(icon.ids.concat(icons[iconId].id));
				icon.sizes = _.uniq(
					icon.sizes.concat(labelling.stripSizePrefix(icons[iconId].size)),
				);
				icon.types = _.uniq(icon.types.concat(icons[iconId].type));

				iconsWithVariants[icons[iconId].svgName] = icon;

				return iconsWithVariants;
			},
			{},
		),
	);

	const templateHelpers = {
		getDefaultSize() {
			return labelling.stripSizePrefix(firstIcon.size);
		},
		getDefaultType() {
			return firstIcon.type;
		},
		iconToComponentName(icon: ITemplateIcon) {
			return `${icon.jsxName}Icon`;
		},
		iconToPropsName(icon: ITemplateIcon) {
			return `${icon.jsxName}IconProps`;
		},
		iconToReactFileName(icon: ITemplateIcon) {
			return `${icon.jsxName}Icon.tsx`;
		},
		iconToSVGSourceAsJSX(icon: ITemplateIcon, size: string, type: string) {
			const filePath = labelling.filePathFromIcon({
				id: icon.ids[0],
				svgName: icon.svgName,
				jsxName: icon.jsxName,
				size,
				type,
			});
			return filePathToSVGinJSXSync(filePath);
		},
		iconHasSizeAndType(icon: ITemplateIcon, size: string, type: string) {
			return icon.ids.some((iconId) => {
				const prefixedSize = labelling.addSizePrefix(size);
				return (
					icons[iconId].size === prefixedSize && icons[iconId].type === type
				);
			});
		},
		stripExtension(fileName: string) {
			return fileName.replace(/(.*)\.\w+$/, "$1");
		},
	};

	const prettierOptions = await prettier.resolveConfig(process.cwd());
	/* Generate Icon Component Modules */
	for (const i in iconsWithVariants) {
		const icon = iconsWithVariants[i];
		let iconSourceRaw = await ejs.render(templates.icon, {
			icon,
			...templateHelpers,
		});
		const iconSource = await prettier.format(iconSourceRaw, {
			...prettierOptions,
			parser: "typescript",
		});
		const iconComponentFilePath = path.resolve(
			currentTempDir,
			"src/",
			templateHelpers.iconToReactFileName(icon),
		);
		await fse.outputFile(iconComponentFilePath, iconSource);
		currentListOfAddedFiles.push(iconComponentFilePath);
	}

	/* Generate Entry Module */
	let entrySourceRaw = await ejs.render(templates.entry, {
		icons: iconsWithVariants,
		...templateHelpers,
	});
	const entrySource = await prettier.format(entrySourceRaw, {
		...prettierOptions,
		parser: "typescript",
	});
	const entryFilePath = path.resolve(currentTempDir, FILE_PATH_ENTRY);
	await fse.outputFile(entryFilePath, entrySource);
	currentListOfAddedFiles.push(entryFilePath);

	/* Generate Type Modules */
	const typeDepsFilePath = path.resolve(currentTempDir, FILE_PATH_TYPES);
	await fse.outputFile(typeDepsFilePath, templates.types);
	currentListOfAddedFiles.push(typeDepsFilePath);
}

export async function getCurrentIconManifest(): Promise<IIconManifest> {
	const { stdout: gitRootDir } = await execa("git", [
		"rev-parse",
		"--show-toplevel",
	]);
	const gitRelativePathToManifest = path.relative(
		gitRootDir,
		path.resolve(process.cwd(), FILE_PATH_MANIFEST),
	);
	let { stdout: currentManifest } = await execa("git", [
		"show",
		`HEAD:${gitRelativePathToManifest}`,
	]);
	return JSON.parse(currentManifest);
}

export async function generateIconManifest(icons: IIcons) {
	const iconManifestFilePath = path.resolve(currentTempDir, FILE_PATH_MANIFEST);
	const iconManifest = iconsToManifest(icons);
	let iconManifestRaw = JSON.stringify(iconManifest);
	const prettierOptions = await prettier.resolveConfig(process.cwd());
	iconManifestRaw = await prettier.format(iconManifestRaw, {
		...prettierOptions,
		parser: "json",
	});
	const previousIconManifest = await getCurrentIconManifest();
	await fs.promises.writeFile(iconManifestFilePath, iconManifestRaw, {
		encoding: "utf8",
	});
	currentListOfAddedFiles.push(iconManifestFilePath);
	return [previousIconManifest, iconManifest];
}

export async function swapGeneratedFiles(
	previousIconManifest: IIconManifest,
	nextIconManifest: IIconManifest,
): Promise<string[]> {
	/* We must find all dirs and files that were generated, and remove them: */
	let generatedFilePaths: string[] = [];
	//  1. The top-level dirs for previous SVGs
	pushObjLeafNodesToArr(previousIconManifest, generatedFilePaths);
	//  2. The top-level dirs needed for new SVGs
	pushObjLeafNodesToArr(nextIconManifest, generatedFilePaths);
	//  3. The top-level dirs for generated source
	generatedFilePaths = generatedFilePaths.concat([
		FILE_PATH_ENTRY,
		FILE_PATH_TYPES,
	]);
	const topLevelDirs: string[] = _.uniq(
		generatedFilePaths.map((filePath) => filePath.replace(/^([\w-]+).*/, "$1")),
	);
	for (const i in topLevelDirs) {
		const topLevelDir = topLevelDirs[i];
		await fse.remove(path.resolve(process.cwd(), topLevelDir));
	}
	//  4. The manifest file
	await fse.remove(path.resolve(process.cwd(), FILE_PATH_MANIFEST));

	/* Then we take all the contents of our temp dir and copy them to cwd: */
	await fse.copy(currentTempDir, process.cwd());

	return [...topLevelDirs, FILE_PATH_MANIFEST];
}

export async function getGitCustomDiff(
	touchedPaths: string[],
): Promise<IDiffSummary[]> {
	const { stdout: gitRootDir } = await execa("git", [
		"rev-parse",
		"--show-toplevel",
	]);
	/* Stage all changes to tracked files. */
	/* Stage the "intent" to add for all untracked files. */
	await execa("git", [
		"add",
		"-f",
		"--ignore-removal",
		"--intent-to-add",
		"--",
		...touchedPaths,
	]);
	/* Grab the lines changed per file, as well as the kind of change (D, M, A) */
	const [{ stdout: numstatRaw }, { stdout: nameStatRaw }] = await Promise.all([
		execa("git", [
			"diff",
			"--numstat",
			"--no-renames",
			"--",
			FOLDER_PATH_ICONS,
		]),
		execa("git", [
			"diff",
			"--name-status",
			"--no-renames",
			"--",
			FOLDER_PATH_ICONS,
		]),
	]);

	/* Transform the raw stdout to renderable data. */
	const nameStat = nameStatRaw.split("\n").map((line) => line[0]);
	const diffSummaries: IDiffSummary[] = numstatRaw
		.split("\n")
		.map((line) => line.split("\t"))
		.map(([additions, deletions, filePath], i) => {
			const filePathFromCwd = filePath
				.replace(path.relative(gitRootDir, process.cwd()), "")
				.replace(/^\//, "");

			return {
				status: nameStat[i] || "M",
				additions: parseInt(additions, 10),
				deletions: parseInt(deletions, 10),
				filePath: filePathFromCwd,
				fullFilePath: filePath,
			};
		});

	/* Undo the staging done above, to ensure an expected git status after this tool has been run. */
	await execa("git", ["reset", "HEAD", "--", FOLDER_PATH_ICONS]);

	return diffSummaries;
}

function isTagElement(element: object): element is { attribs: unknown } {
	return "attribs" in element && element.attribs !== undefined;
}

import type {
	Canvas,
	Document,
	FileImageResponse,
	FileResponse,
} from "figma-js";

export class CodedError extends Error {
	public code: ERRORS;
	public hideStack: boolean;

	constructor(code: ERRORS, message: string, hideStack: boolean = false) {
		super(message);
		this.code = code;
		this.hideStack = hideStack;
		Object.setPrototypeOf(this, CodedError.prototype);
	}
}

export enum ERRORS {
	NETWORK_OFFLINE = "NETWORK_OFFLINE",
	DIRTY_WORKING_DIR = "DIRTY_WORKING_DIR",
	UNEXPECTED = "UNEXPECTED",
	NO_ICONS_PAGE = "NO_ICONS_PAGE",
	NO_ICONS_IN_SETS = "NO_ICONS_IN_SETS",
	FIGMA_API = "FIGMA_API",
}

export interface IFigmaConfig {
	baseUrl: string;
	fileKey: string;
	headers: Headers;
}

export interface IIcon {
	id: string;
	size: string;
	type: string;
	jsxName: string;
	svgName: string;
}

export interface IIcons {
	[iconId: string]: IIcon;
}

export interface ITemplateIcon {
	ids: string[];
	sizes: string[];
	types: string[];
	jsxName: string;
	svgName: string;
}

export interface IIconsSvgUrls {
	readonly [iconId: string]: string;
}

export interface RequestInitWithRetry extends RequestInit {
	retry?: { delay: number; retries: number };
}

export interface IIconManifest {
	[category: string]: { [size: string]: { [name: string]: string } };
}

export interface IDiffSummary {
	status: string;
	additions: number;
	deletions: number;
	filePath: string;
	fullFilePath: string;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface ErrorResponse {
	readonly err?: string;
	readonly status?: 400 | 403 | 404 | 429 | 500;
}
export interface IFigmaCanvas extends Canvas {}
export interface IFigmaDocument extends Document {}
export interface IFigmaFileImageResponse
	extends Omit<FileImageResponse, "err" | "status">,
		ErrorResponse {}
export interface IFigmaFileResponse extends FileResponse, ErrorResponse {}

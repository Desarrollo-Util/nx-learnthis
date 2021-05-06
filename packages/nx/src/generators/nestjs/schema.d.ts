/** Values obtained from CLI */
export interface NestJsCLIOptions {
	/** Project name */
	name: string;
	/** Project tags */
	tags?: string;
}

/** Normalized options, with project names */
export interface NestJsNormalizedOptions extends NestJsCLIOptions {
	/** Project name */
	projectName: string;
	/** Project root folder */
	projectRoot: string;
	/** Tags parsed to array */
	parsedTags: string[];
}

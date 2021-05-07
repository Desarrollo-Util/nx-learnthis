/** Values obtained from CLI */
export interface ReactLibCLIOptions {
	/** Project name */
	name: string;
	/** Project tags */
	tags?: string;
}

/** Normalized options, with project names */
export interface ReactLibNormalizedOptions extends ReactLibCLIOptions {
	/** Project name */
	projectName: string;
	/** Project root folder */
	projectRoot: string;
	/** Tags parsed to array */
	parsedTags: string[];
}

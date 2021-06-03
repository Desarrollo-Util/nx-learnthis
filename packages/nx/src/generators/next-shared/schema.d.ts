/** Values obtained from CLI */
export interface NextSharedCLIOptions {
	/** Project name */
	name: string;
	/** Project tags */
	tags?: string;
}

/** Normalized options, with project names */
export interface NextSharedNormalizedOptions extends NextSharedCLIOptions {
	/** Project name */
	projectName: string;
	/** Project root folder */
	projectRoot: string;
	/** Tags parsed to array */
	parsedTags: string[];
}

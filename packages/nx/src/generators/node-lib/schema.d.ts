/** Values obtained from CLI */
export interface NodeLibCLIOptions {
	/** Project name */
	name: string;
	/** Project tags */
	tags?: string;
}

/** Normalized options, with project names */
export interface NodeLibNormalizedOptions extends NodeLibCLIOptions {
	/** Project name */
	projectName: string;
	/** Project root folder */
	projectRoot: string;
	/** Tags parsed to array */
	parsedTags: string[];
}

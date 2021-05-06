/** Values obtained from CLI */
export interface SharedKernelCLIOptions {
	/** Project name */
	name: string;
	/** Project tags */
	tags?: string;
}

/** Normalized options, with project names */
export interface SharedKernelNormalizedOptions extends SharedKernelCLIOptions {
	/** Project name */
	projectName: string;
	/** Project root folder */
	projectRoot: string;
	/** Tags parsed to array */
	parsedTags: string[];
}

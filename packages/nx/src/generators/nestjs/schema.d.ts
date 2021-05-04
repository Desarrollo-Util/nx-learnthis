/** Values obtained from CLI */
export interface SharedKernelGeneratorCLIOptions {
	/** Project name */
	name: string;
}

/** Normalized options, with project names */
export interface SharedKernelNormalizedSchema
	extends SharedKernelGeneratorCLIOptions {
	/** Project name */
	projectName: string;
	/** Project root folder */
	projectRoot: string;
	/** Project directory */
	projectDirectory: string;
}

/** Values obtained from CLI */
export interface NestJsBcCLIOptions {
	/** NestJS base project name */
	baseProjectName: string;
	/** Bounded context name */
	boundedContextName: string;
	/** Module names */
	modules: string;
}

/** Normalized options, with project names */
export interface NestJsBcNormalizedOptions
	extends Omit<NestJsBcCLIOptions, 'modules'> {
	/** Base project src folder */
	baseProjectSrc: string;
	/** Parsed module names array*/
	parsedModules: string[];
}

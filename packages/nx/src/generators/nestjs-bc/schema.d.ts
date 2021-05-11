/** Values obtained from CLI */
export interface NestJsBcCLIOptions {
	/** NestJS base project name */
	baseProjectName: string;
	/** Bounded context name pascalcase*/
	bcNamePascal: string;
	/** Module names */
	modules: string;
}

/** Normalized options, with project names */
export interface NestJsBcNormalizedOptions
	extends Omit<NestJsBcCLIOptions, 'modules'> {
	/** Shared alias */
	sharedAlias: string;
	/** Bounded context name snakecase*/
	bcNameSnake: string;
	/** Base project src folder */
	baseProjectSrc: string;
	/** Parsed module names array*/
	parsedModules: string[];
}

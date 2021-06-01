/** Values obtained from CLI */
export interface ReactIconsCLIOptions {
	/** Project name */
	name: string;
	/** Component's name */
	components: string;
}

/** Normalized options, with project names */
export interface ReactIconsNormalizedOptions {
	/** Project components folder */
	componentsFolder: string;
	/** Component names */
	parsedComponents: string[];
}

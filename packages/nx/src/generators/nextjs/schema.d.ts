/** Values obtained from CLI */
export interface NextJsCLIOptions {
	/** Project name */
	name: string;
	/** Project template */
	template: 'basic' | 'auth';
	/** Use react-toastify */
	useToast: boolean;
	/** Use formik and yup */
	useFormikAndYup: boolean;
	/** Use UUID */
	useUuid: boolean;
	/** Project tags */
	tags?: string;
	/** Project directory */
	directory?: string;
}

/** Normalized options, with project names */
export interface NextJsNormalizedOptions
	extends Omit<NextJsCLIOptions, '_name'> {
	/** Project name */
	projectName: string;
	/** Project root folder */
	projectRoot: string;
	/** Tags parsed to array */
	parsedTags: string[];
}

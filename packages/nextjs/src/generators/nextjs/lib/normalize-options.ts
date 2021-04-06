import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import { NextJsGeneratorCLIOptions, NormalizedSchema } from '../schema';

/**
 * Normalizes generator options obtained from CLI, adding:
 *  - name: Project name
 *  - directory: Project directory
 *  - root folder: Project's root folder
 *  - tags: Project's tags
 * @param tree Custom file system implementation
 * @param options CLI options
 * @returns Normalized options
 */
export const normalizeOptions = (
	tree: Tree,
	options: NextJsGeneratorCLIOptions
): NormalizedSchema => {
	const name = names(options.name).fileName;
	const projectDirectory = options.directory
		? `${names(options.directory).fileName}/${name}`
		: name;
	const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
	const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectDirectory}`;
	const parsedTags = options.tags
		? options.tags.split(',').map(s => s.trim())
		: [];

	return {
		...options,
		projectName,
		projectRoot,
		projectDirectory,
		parsedTags,
	};
};

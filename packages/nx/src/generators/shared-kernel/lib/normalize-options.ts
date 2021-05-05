import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import type {
	SharedKernelGeneratorCLIOptions,
	SharedKernelNormalizedSchema,
} from '../schema';

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
	options: SharedKernelGeneratorCLIOptions
): SharedKernelNormalizedSchema => {
	const name = names(options.name).fileName;
	const projectDirectory = name;
	const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
	const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;

	return {
		...options,
		projectName,
		projectRoot,
		projectDirectory,
	};
};

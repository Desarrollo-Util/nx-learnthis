import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import type {
	SharedKernelCLIOptions,
	SharedKernelNormalizedOptions,
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
	options: SharedKernelCLIOptions
): SharedKernelNormalizedOptions => {
	const projectName = names(options.name).fileName.replace(
		new RegExp('/', 'g'),
		'-'
	);
	const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectName}`;
	const parsedTags = options.tags
		? options.tags.split(',').map(s => s.trim())
		: [];

	parsedTags.push('nest');

	return {
		...options,
		projectName,
		projectRoot,
		parsedTags,
	};
};

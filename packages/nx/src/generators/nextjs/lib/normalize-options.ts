import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import { Tags } from '../../../constants/tags.enum';
import type { NextJsCLIOptions, NextJsNormalizedOptions } from '../schema';

/**
 * Normalizes generator options obtained from CLI
 * @param tree Custom file system implementation
 * @param options CLI options
 * @returns Normalized options
 */
export const normalizeOptions = (
	tree: Tree,
	options: NextJsCLIOptions
): NextJsNormalizedOptions => {
	const projectName = names(options.name).fileName.replace(
		new RegExp('/', 'g'),
		'-'
	);
	const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectName}`;
	const parsedTags = [Tags.NEXTJS_APP, Tags.REACT, projectName];

	if (options.tags)
		parsedTags.push(...options.tags.split(',').map(s => s.trim()));

	return {
		...options,
		projectName,
		projectRoot,
		parsedTags,
	};
};

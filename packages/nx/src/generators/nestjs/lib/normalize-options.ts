import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import type {
	NestJsCLIOptions,
	NestJsNormalizedOptions,
} from 'packages/nx/src/generators/nestjs/schema';
import { Tags } from '../../../constants/tags.enum';

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
	options: NestJsCLIOptions
): NestJsNormalizedOptions => {
	const projectName = names(options.name).fileName.replace(
		new RegExp('/', 'g'),
		'-'
	);
	const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectName}`;
	const parsedTags = [Tags.NESTJS, projectName];

	if (options.tags)
		parsedTags.push(...options.tags.split(',').map(s => s.trim()));

	return {
		...options,
		projectName,
		projectRoot,
		parsedTags,
	};
};

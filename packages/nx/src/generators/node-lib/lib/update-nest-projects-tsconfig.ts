import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { Tags } from '../../../constants/tags.enum';
import { findProjectsByTag } from '../../../utils/find-projects-by-tag';
import { updateNestTsconfigAlias } from '../../../utils/update-nest-tsconfig-alias';
import type { NodeLibNormalizedOptions } from '../schema';

/**
 * Updates tsconfg.app and tsconfig.build of all projects
 * @param tree File system implementation
 * @param options Normalized options
 */
export const updateNestProjectsTsconfig = (
	tree: Tree,
	options: NodeLibNormalizedOptions
): void => {
	const projectNames = findProjectsByTag(tree, Tags.NESTJS_APP);

	const aliases: Record<string, string[]> = {
		[`@${options.projectName}/*`]: [`dist/${options.projectRoot}/*`],
	};

	for (const projectName of projectNames) {
		const projectConfig = readProjectConfiguration(tree, projectName);

		updateNestTsconfigAlias(tree, projectConfig.root, aliases);
	}
};

import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { Tags } from '../../../constants/tags.enum';
import { findProjectsByTag } from '../../../utils/find-projects-by-tag';
import { updateNestTsconfigAlias } from '../../../utils/update-nest-tsconfig-alias';
import type { NestJsNormalizedOptions } from '../schema';

/**
 * Updates path aliases for tsconfig.app and tsconfig.build
 * @param tree File system implementation
 * @param options Normalized options
 */
export const updateTsconfigAlias = (
	tree: Tree,
	options: NestJsNormalizedOptions
): void => {
	const projectNames = findProjectsByTag(tree, Tags.NODE_LIB);

	const aliases: Record<string, string[]> = {
		[`@${options.projectName}/*`]: [`${options.projectRoot}/src/*`],
	};

	for (const projectName of projectNames) {
		const projectConfig = readProjectConfiguration(tree, projectName);

		aliases[`@${projectName}/*`] = [`dist/${projectConfig.root}/*`];
	}

	updateNestTsconfigAlias(tree, options.projectRoot, aliases);
};

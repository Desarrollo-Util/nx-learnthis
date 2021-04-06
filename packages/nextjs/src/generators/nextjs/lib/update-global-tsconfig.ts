import { logger, Tree, updateJson } from '@nrwl/devkit';
import { NormalizedSchema } from '../schema';

/**
 * Updates global tsConfig to add new project's alias
 * @param tree File system implementation
 * @param options Normalized options
 */
export const updateGlobalTsConfig = (
	tree: Tree,
	options: NormalizedSchema
): void => {
	if (tree.exists('tsconfig.base.json')) {
		updateJson(tree, 'tsconfig.base.json', (tsconfig: Record<string, any>) => {
			const alias = `@${options.projectName}/*`;

			if (tsconfig.compilerOptions.paths) {
				tsconfig.compilerOptions.paths = {
					...tsconfig.compilerOptions.paths,
					[alias]: [`${options.projectRoot}/*`],
				};
			} else {
				tsconfig.compilerOptions.paths = {
					[alias]: [`${options.projectRoot}/*`],
				};
			}

			return tsconfig;
		});
	} else {
		logger.warn(`Couldn't find tsconfig.base.json file to update`);
	}
};

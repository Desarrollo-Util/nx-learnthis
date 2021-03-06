import { logger, Tree, updateJson } from '@nrwl/devkit';

/** Global tsconfig path */
const TS_CONFIG_PATH = 'tsconfig.base.json';

/**
 * Adds a new path alias to global tsconfig
 * @param tree File system implementation
 * @param projectName Project's name
 * @param projectRoot Project's root folder path
 */
export const addPathAliasToGlobalTsConfig = (
	tree: Tree,
	projectName: string,
	projectRoot: string
): void => {
	if (tree.exists(TS_CONFIG_PATH)) {
		updateJson(tree, TS_CONFIG_PATH, (tsconfig: Record<string, any>) => {
			const paths = tsconfig.compilerOptions.paths || {};

			paths[`@${projectName}/*`] = [`${projectRoot}/src/*`];

			tsconfig.compilerOptions.paths = paths;

			return tsconfig;
		});
	} else {
		logger.warn(`Couldn't find ${TS_CONFIG_PATH} file to update`);
	}
};

import { Tree, updateJson } from '@nrwl/devkit';

/** Tsconfig.app filename */
const TS_CONFIG_APP = 'tsconfig.app.json';
/** Tsconfig.build filename */
const TS_CONFIG_BUILD = 'tsconfig.build.json';

/**
 * Updates path aliases of tsconfig.app and tsconfig.build of a given folder
 * @param tree File system implementation
 * @param projectRoot Root folder
 * @param aliases Aliases
 */
export const updateNestTsconfigAlias = (
	tree: Tree,
	projectRoot: string,
	aliases: Record<string, string[]>
): void => {
	const tsConfigAppPath = `${projectRoot}/${TS_CONFIG_APP}`;
	const tsConfigBuildPath = `${projectRoot}/${TS_CONFIG_BUILD}`;

	if (!tree.exists(tsConfigAppPath))
		throw new Error(`Could not find ${tsConfigAppPath}`);

	updateJson(tree, tsConfigAppPath, value => {
		value.compilerOptions.paths = {
			...value.compilerOptions.paths,
			...aliases,
		};

		return value;
	});

	if (!tree.exists(tsConfigBuildPath))
		throw new Error(`Could not find ${tsConfigBuildPath}`);

	updateJson(tree, tsConfigBuildPath, value => {
		value.compilerOptions.paths = {
			...value.compilerOptions.paths,
			...aliases,
		};

		return value;
	});
};

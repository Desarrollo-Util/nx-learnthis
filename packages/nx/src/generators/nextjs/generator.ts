import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { addPathAliasToGlobalTsConfig } from '../../utils/add-path-alias-to-global-tsconfig';
import {
	addFiles,
	addProjectToWorkspace,
	normalizeOptions,
	updateDependencies,
	updateGlobalBabelConfig,
	updateGlobalGitIgnore,
} from './lib';
import type { NextJsCLIOptions } from './schema';

/**
 * Generator main function
 * @param tree File system implementation
 * @param options Options from CLI
 * @returns Task to run after generator ends
 */
export default async function (tree: Tree, options: NextJsCLIOptions) {
	const normalizedOptions = normalizeOptions(tree, options);
	addProjectToWorkspace(tree, normalizedOptions);
	addFiles(tree, normalizedOptions);
	updateGlobalGitIgnore(tree, normalizedOptions);
	addPathAliasToGlobalTsConfig(
		tree,
		normalizedOptions.projectName,
		normalizedOptions.projectRoot
	);
	updateGlobalBabelConfig(tree);
	await formatFiles(tree);
	updateDependencies(tree, normalizedOptions);

	return () => {
		// Installs all package.json dependencies if not already installed
		installPackagesTask(tree);
	};
}

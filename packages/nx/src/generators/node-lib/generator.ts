import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { addPathAliasToGlobalTsConfig } from '../../utils/add-path-alias-to-global-tsconfig';
import {
	addFiles,
	addProjectToWorkspace,
	normalizeOptions,
	updateDependencies,
	updateNestProjectsTsconfig,
} from './lib';
import type { NodeLibCLIOptions } from './schema';

export default async (tree: Tree, options: NodeLibCLIOptions) => {
	const normalizedOptions = normalizeOptions(tree, options);

	addProjectToWorkspace(tree, normalizedOptions);
	addFiles(tree, normalizedOptions);
	await formatFiles(tree);
	updateDependencies(tree);
	addPathAliasToGlobalTsConfig(
		tree,
		normalizedOptions.projectName,
		normalizedOptions.projectRoot
	);
	updateNestProjectsTsconfig(tree, normalizedOptions);

	return () => {
		// Installs all package.json dependencies if not already installed
		installPackagesTask(tree);
	};
};

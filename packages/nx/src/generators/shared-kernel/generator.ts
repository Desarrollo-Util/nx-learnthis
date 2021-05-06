import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { addPathAliasToGlobalTsConfig } from '../../utils/add-path-alias-to-global-tsconfig';
import {
	addFiles,
	addProjectToWorkspace,
	normalizeOptions,
	updateDependencies,
} from './lib';
import type { SharedKernelCLIOptions } from './schema';

export default async (tree: Tree, options: SharedKernelCLIOptions) => {
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

	return () => {
		// Installs all package.json dependencies if not already installed
		installPackagesTask(tree);
	};
};

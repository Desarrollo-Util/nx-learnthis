import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import sharedLib from './lib';
import { SharedKernelGeneratorCLIOptions } from './schema';

export default async (tree: Tree, options: SharedKernelGeneratorCLIOptions) => {
	const { normalizeOptions, addFiles, updateDependencies } = sharedLib;

	const normalizedOptions = normalizeOptions(tree, options);
	addFiles(tree, normalizedOptions);
	await formatFiles(tree);
	updateDependencies(tree);

	return () => {
		// Installs all package.json dependencies if not already installed
		installPackagesTask(tree);
	};
};

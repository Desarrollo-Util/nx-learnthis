import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { Tags } from '../../constants/tags.enum';
import { addPathAliasToGlobalTsConfig } from '../../utils/add-path-alias-to-global-tsconfig';
import { findProjectsByTag } from '../../utils/find-projects-by-tag';
import {
	addFiles,
	addProjectToWorkspace,
	normalizeOptions,
	updateDependencies,
} from './lib';
import type { SharedKernelCLIOptions } from './schema';

export default async (tree: Tree, options: SharedKernelCLIOptions) => {
	const normalizedOptions = normalizeOptions(tree, options);

	const existingSharedProjects = findProjectsByTag(tree, Tags.NEST_SHARED);

	if (existingSharedProjects.length)
		throw new Error('Shared template already exists on workspace');

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

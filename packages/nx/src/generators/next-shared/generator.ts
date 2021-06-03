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
import type { NextSharedCLIOptions } from './schema';

export default async (tree: Tree, options: NextSharedCLIOptions) => {
	const normalizedOptions = normalizeOptions(tree, options);

	const existingSharedProjects = findProjectsByTag(tree, Tags.NEXT_SHARED);

	if (existingSharedProjects.length)
		throw new Error('Next shared project already exists on workspace');

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

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
import type { NestJsCLIOptions } from './schema';

export default async (tree: Tree, options: NestJsCLIOptions) => {
	const normalizedOptions = normalizeOptions(tree, options);

	const sharedProjectName = findProjectsByTag(tree, Tags.NEST_SHARED)[0];

	if (!sharedProjectName)
		throw new Error(
			'You must create a shared-kernel project before run this generator'
		);

	addProjectToWorkspace(tree, normalizedOptions, sharedProjectName);
	addFiles(tree, normalizedOptions, sharedProjectName);
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

import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { addFiles } from './lib/add-files';
import { addProjectToWorkspace } from './lib/add-project-to-workspace';
import { normalizeOptions } from './lib/normalize-options';
import { updateDependencies } from './lib/update-dependencies';
import { updateGlobalGitIgnore } from './lib/update-global-gitignore';
import { updateGlobalTsConfig } from './lib/update-global-tsconfig';
import { NextJsGeneratorCLIOptions } from './schema';

/**
 * Generator main function
 * @param tree File system implementation
 * @param options Options from CLI
 * @returns Task to run after generator ends
 */
export default async function (tree: Tree, options: NextJsGeneratorCLIOptions) {
	const normalizedOptions = normalizeOptions(tree, options);
	addProjectToWorkspace(tree, normalizedOptions);
	addFiles(tree, normalizedOptions);
	updateGlobalGitIgnore(tree, normalizedOptions);
	updateGlobalTsConfig(tree, normalizedOptions);
	await formatFiles(tree);
	updateDependencies(tree, normalizedOptions);

	return () => {
		// Installs all package.json dependencies if not already installed
		installPackagesTask(tree);
	};
}

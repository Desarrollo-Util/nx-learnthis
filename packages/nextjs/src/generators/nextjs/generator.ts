import {
	addProjectConfiguration,
	formatFiles,
	installPackagesTask,
	Tree,
} from '@nrwl/devkit';
import { addFiles } from './lib/add-files';
import { normalizeOptions } from './lib/normalize-options';
import { updateDependencies } from './lib/update-dependencies';
import { updateGlobalGitIgnore } from './lib/update-global-gitignore';
import { updateGlobalTsConfig } from './lib/update-global-tsconfig';
import { NextJsGeneratorCLIOptions } from './schema';

export default async function (tree: Tree, options: NextJsGeneratorCLIOptions) {
	const normalizedOptions = normalizeOptions(tree, options);
	addProjectConfiguration(tree, normalizedOptions.projectName, {
		root: normalizedOptions.projectRoot,
		projectType: 'application',
		sourceRoot: `${normalizedOptions.projectRoot}/src`,
		targets: {
			build: {
				executor: '@nx-learnthis/nextjs:build',
			},
		},
		tags: normalizedOptions.parsedTags,
	});
	addFiles(tree, normalizedOptions);
	updateGlobalGitIgnore(tree);
	updateGlobalTsConfig(tree, normalizedOptions);
	// Formats all created files using Prettier
	await formatFiles(tree);

	updateDependencies(tree, normalizedOptions);

	return () => {
		// Installs all package.json dependencies if not already installed
		installPackagesTask(tree);
	};
}

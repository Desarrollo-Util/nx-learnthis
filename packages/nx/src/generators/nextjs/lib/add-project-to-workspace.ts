import {
	addProjectConfiguration,
	ProjectConfiguration,
	Tree,
} from '@nrwl/devkit';
import type { NextJsNormalizedOptions } from '../schema';

/**
 * Adds project to workspace and configure targets for it
 * @param tree File system implementation
 * @param options Normalized CLI options
 */
export const addProjectToWorkspace = (
	tree: Tree,
	options: NextJsNormalizedOptions
): void => {
	const project: ProjectConfiguration = {
		root: options.projectRoot,
		sourceRoot: `${options.projectRoot}/src`,
		projectType: 'application',
		targets: {
			build: {
				executor: '@nrwl/workspace:run-commands',
				options: {
					cwd: options.projectRoot,
					commands: ['npx next build'],
				},
			},
			serve: {
				executor: '@nrwl/workspace:run-commands',
				options: {
					cwd: options.projectRoot,
					commands: ['npx next dev -p 3001'],
				},
			},
			start: {
				executor: '@nrwl/workspace:run-commands',
				options: {
					cwd: options.projectRoot,
					commands: ['npx next start -p 3001'],
				},
			},
		},
	};

	addProjectConfiguration(tree, options.projectName, {
		...project,
	});
};

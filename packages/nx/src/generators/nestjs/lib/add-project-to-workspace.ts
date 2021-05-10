import {
	addProjectConfiguration,
	NxJsonProjectConfiguration,
	ProjectConfiguration,
	Tree,
} from '@nrwl/devkit';
import type { NestJsNormalizedOptions } from 'packages/nx/src/generators/nestjs/schema';

/**
 * Adds project to workspace and configure targets for it
 * @param tree File system implementation
 * @param options Normalized CLI options
 * @param sharedProjectName Shared-kernel project name
 */
export const addProjectToWorkspace = (
	tree: Tree,
	options: NestJsNormalizedOptions,
	sharedProjectName: string
): void => {
	const nxConfig: NxJsonProjectConfiguration = {
		tags: options.parsedTags,
	};

	const project: ProjectConfiguration = {
		root: options.projectRoot,
		sourceRoot: `${options.projectRoot}/src`,
		projectType: 'application',
		targets: {
			serve: {
				executor: '@nrwl/workspace:run-commands',
				options: {
					cwd: options.projectRoot,
					commands: ['npx nest start --watch -p tsconfig.app.json'],
				},
			},
			build: {
				executor: '@nrwl/workspace:run-commands',
				options: {
					cwd: options.projectRoot,
					commands: [
						`npx nx build ${sharedProjectName}`,
						'npx nest build -p tsconfig.build.json',
					],
				},
			},
			start: {
				executor: '@nrwl/workspace:run-commands',
				options: {
					cwd: `dist/${options.projectRoot}`,
					commands: ['node main'],
				},
			},
		},
	};

	addProjectConfiguration(tree, options.projectName, {
		...project,
		...nxConfig,
	});
};

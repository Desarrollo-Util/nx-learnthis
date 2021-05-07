import {
	addProjectConfiguration,
	NxJsonProjectConfiguration,
	ProjectConfiguration,
	Tree,
} from '@nrwl/devkit';
import type { NodeLibNormalizedOptions } from '../schema';

/**
 * Adds project to workspace and configure targets for it
 * @param tree File system implementation
 * @param options Normalized CLI options
 */
export const addProjectToWorkspace = (
	tree: Tree,
	options: NodeLibNormalizedOptions
): void => {
	const nxConfig: NxJsonProjectConfiguration = {
		tags: options.parsedTags,
	};

	const project: ProjectConfiguration = {
		root: options.projectRoot,
		sourceRoot: `${options.projectRoot}/src`,
		projectType: 'library',
		targets: {
			build: {
				executor: '@nrwl/workspace:run-commands',
				options: {
					cwd: options.projectRoot,
					commands: ['npx ttsc'],
				},
			},
		},
	};

	addProjectConfiguration(tree, options.projectName, {
		...project,
		...nxConfig,
	});
};

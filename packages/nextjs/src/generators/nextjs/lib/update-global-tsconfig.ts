import {
	logger,
	readJson,
	Tree,
	updateJson,
	WorkspaceJsonConfiguration,
} from '@nrwl/devkit';
import { NormalizedSchema } from '../schema';

/**
 * Updates global tsConfig to add new project's alias
 * @param tree File system implementation
 * @param options Normalized options
 */
export const updateGlobalTsConfig = (
	tree: Tree,
	options: NormalizedSchema
): void => {
	const workspace = readJson<WorkspaceJsonConfiguration>(
		tree,
		'workspace.json'
	);
	const libFolders = Object.entries(workspace.projects)
		.filter(project => project[1].projectType === 'library')
		.map(project => ({ name: project[0], src: project[1].root }));

	if (tree.exists(`${options.projectRoot}/tsconfig.json`)) {
		updateJson(
			tree,
			`${options.projectRoot}/tsconfig.json`,
			(tsconfig: Record<string, any>) => {
				const aliases = tsconfig.compilerOptions.alias || {};

				const projectAlias = `@${options.name}/*`;

				aliases[projectAlias] = [`${options.projectRoot}/src/*`];

				for (const lib of libFolders) {
					const alias = `@${lib.name}/*`;

					aliases[alias] = [`${lib.src}/src/*`];
				}

				tsconfig.compilerOptions.alias = aliases;

				return tsconfig;
			}
		);
	} else {
		logger.warn(
			`Couldn't find ${options.projectRoot}/tsconfig.json file to update`
		);
	}
};

import { logger, Tree, updateJson } from '@nrwl/devkit';
import type { DockerGeneratorOptions } from '../schema';

/** Package json path */
const PACKAGE_JSON_PATH = 'package.json';

/**
 * Adds docker scripts to package.json
 * @param tree File system implementation
 * @param options Normalized options
 */
export const updatePackageJsonScripts = (
	tree: Tree,
	options: DockerGeneratorOptions
): void => {
	if (tree.exists(PACKAGE_JSON_PATH)) {
		updateJson(tree, PACKAGE_JSON_PATH, (packageJson: Record<string, any>) => {
			packageJson.scripts = {
				...packageJson.scripts,
				'docker:dev:up': `docker-compose -p ${options.prefix} up -d`,
				'docker:dev:down': `docker-compose -p ${options.prefix} down`,
				'docker:dev:down:volumes': `docker-compose -p ${options.prefix} down -v`,
			};

			return packageJson;
		});
	} else {
		logger.warn(`Couldn't find ${PACKAGE_JSON_PATH} file to update`);
	}
};

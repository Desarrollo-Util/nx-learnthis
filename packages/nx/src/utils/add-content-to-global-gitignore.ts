import { logger, Tree } from '@nrwl/devkit';

/** Global git ignore path */
const GIT_IGNORE_PATH = '.gitignore';

/**
 * Adds content to global gitIgnore
 * @param tree File system implementation
 * @param content Content to add
 */
export const addContentToGlobalGitIgnore = (
	tree: Tree,
	content: string
): void => {
	if (tree.exists(GIT_IGNORE_PATH)) {
		let gitIgnore = (tree.read(GIT_IGNORE_PATH) as Buffer).toString('utf-8');

		gitIgnore += '\n';
		gitIgnore += content;
		gitIgnore += '\n';

		tree.write(GIT_IGNORE_PATH, gitIgnore);
	} else {
		logger.warn(`Couldn't find ${GIT_IGNORE_PATH} file to update`);
	}
};

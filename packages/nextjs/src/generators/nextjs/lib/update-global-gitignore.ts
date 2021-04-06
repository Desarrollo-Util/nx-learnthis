import { logger, Tree } from '@nrwl/devkit';

/**
 * Copies gitignore from template
 * @param tree File system implementation
 */
export const updateGlobalGitIgnore = (tree: Tree): void => {
	if (tree.exists('.gitignore')) {
		const content = tree.read('.gitignore').toString('utf-8');

		// TODO: Modify global gitignore

		tree.write('.gitignore', content);
	} else {
		logger.warn(`Couldn't find .gitignore file to update`);
	}
};

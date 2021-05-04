import { logger, Tree } from '@nrwl/devkit';
import { NormalizedSchema } from '../schema';

/**
 * Updates workspace gitignore to add new project
 * @param tree File system implementation
 * @param options Normalized options
 */
export const updateGlobalGitIgnore = (
	tree: Tree,
	options: NormalizedSchema
): void => {
	if (tree.exists('.gitignore')) {
		let content = tree.read('.gitignore').toString('utf-8');

		content += '\n';
		content += `# NextJS - ${options.projectName} gitignore\n`;
		content += '\n';
		content += `${options.projectRoot}/.next/\n`;
		content += `${options.projectRoot}/.vercel/\n`;
		content += `${options.projectRoot}/build/\n`;
		content += '\n';
		content += `${options.projectRoot}/npm-debug.log*\n`;
		content += '\n';
		content += `${options.projectRoot}/.env\n`;
		content += '\n';

		tree.write('.gitignore', content);
	} else {
		logger.warn(`Couldn't find .gitignore file to update`);
	}
};

import type { Tree } from '@nrwl/devkit';
import { addContentToGlobalGitIgnore } from '../../../utils/add-content-to-global-gitignore';
import type { NextJsNormalizedOptions } from '../schema';

/**
 * Updates workspace gitignore to add new project
 * @param tree File system implementation
 * @param options Normalized options
 */
export const updateGlobalGitIgnore = (
	tree: Tree,
	options: NextJsNormalizedOptions
): void => {
	let gitIgnoreContent = '';
	gitIgnoreContent += `# NextJS - ${options.projectName} gitignore\n`;
	gitIgnoreContent += '\n';
	gitIgnoreContent += `${options.projectRoot}/.next/\n`;
	gitIgnoreContent += `${options.projectRoot}/.vercel/\n`;
	gitIgnoreContent += `${options.projectRoot}/build/\n`;
	gitIgnoreContent += '\n';
	gitIgnoreContent += `${options.projectRoot}/npm-debug.log*\n`;
	gitIgnoreContent += '\n';
	gitIgnoreContent += `${options.projectRoot}/.env\n`;

	addContentToGlobalGitIgnore(tree, gitIgnoreContent);
};

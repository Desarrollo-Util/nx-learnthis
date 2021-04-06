import { generateFiles, names, offsetFromRoot, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { NormalizedSchema } from '../schema';

/**
 * Copies files from template directory into file system
 * @param tree File system implementation
 * @param options Template options
 */
export const addFiles = (tree: Tree, options: NormalizedSchema): void => {
	const templateOptions = {
		...options,
		...names(options.name),
		offsetFromRoot: offsetFromRoot(options.projectRoot),
		template: ''
	};

	generateFiles(
		tree,
		join(__dirname, '../files'),
		options.projectRoot,
		templateOptions
	);
};

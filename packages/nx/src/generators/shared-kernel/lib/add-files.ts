import { generateFiles, names, offsetFromRoot, Tree } from '@nrwl/devkit';
import { join } from 'path';
import type { SharedKernelNormalizedSchema } from '../schema';

/**
 * Copies files from template directory into file system
 * @param tree File system implementation
 * @param options Template options
 */
export const addFiles = (
	tree: Tree,
	options: SharedKernelNormalizedSchema
): void => {
	const templateOptions = {
		...options,
		...names(options.name),
		offsetFromRoot: offsetFromRoot(options.projectRoot),
		tmpl: '',
	};

	// Copy common files
	generateFiles(
		tree,
		join(__dirname, '../templates/src'),
		options.projectRoot,
		templateOptions
	);
};

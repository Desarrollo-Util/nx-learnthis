import { generateFiles, Tree } from '@nrwl/devkit';
import { join } from 'path';
import type { SharedKernelNormalizedOptions } from '../schema';

/**
 * Copies files from template directory into file system
 * @param tree File system implementation
 * @param options Template options
 */
export const addFiles = (
	tree: Tree,
	options: SharedKernelNormalizedOptions
): void => {
	const templateOptions = {
		...options,
		tmpl: '',
	};

	// Copy common files
	generateFiles(
		tree,
		join(__dirname, '../templates'),
		options.projectRoot,
		templateOptions
	);
};

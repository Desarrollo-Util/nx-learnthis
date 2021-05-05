import { generateFiles, Tree } from '@nrwl/devkit';
import { join } from 'path';
import type { NextJsNormalizedOptions } from '../schema';

/**
 * Copies files from template directory into file system
 * @param tree File system implementation
 * @param options Template options
 */
export const addFiles = (
	tree: Tree,
	options: NextJsNormalizedOptions
): void => {
	const templateVariables = {
		...options,
		tmpl: '',
	};

	// Copy common files
	generateFiles(
		tree,
		join(__dirname, '../templates/common'),
		options.projectRoot,
		templateVariables
	);

	// Copy template-related files
	generateFiles(
		tree,
		join(__dirname, `../templates/${options.template}`),
		options.projectRoot,
		templateVariables
	);

	if (options.useToast)
		generateFiles(
			tree,
			join(__dirname, '../templates/toast'),
			options.projectRoot,
			templateVariables
		);
};

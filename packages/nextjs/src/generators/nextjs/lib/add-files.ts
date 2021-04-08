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
		tmpl: '',
	};

	// Copy common files
	generateFiles(
		tree,
		join(__dirname, '../templates/common'),
		options.projectRoot,
		templateOptions
	);

	// Copy template-related files
	generateFiles(
		tree,
		join(__dirname, `../templates/${options.template}`),
		options.projectRoot,
		templateOptions
	);

	if (options.useToast)
		generateFiles(
			tree,
			join(__dirname, '../templates/toast'),
			options.projectRoot,
			templateOptions
		);
};

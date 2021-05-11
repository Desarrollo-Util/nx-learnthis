import { generateFiles, Tree } from '@nrwl/devkit';
import { join } from 'path';
import type { NestJsNormalizedOptions } from '../schema';

/**
 * Copies files from template directory into file system
 * @param tree File system implementation
 * @param options Template options
 * @param sharedProjectName Shared-kernel project name
 */
export const addFiles = (
	tree: Tree,
	options: NestJsNormalizedOptions,
	sharedProjectName: string
): void => {
	const templateOptions = {
		...options,
		project_name_underscored: options.projectName
			.toLowerCase()
			.replace(/\-/g, '_'),
		sharedAlias: sharedProjectName,
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

import { generateFiles, Tree } from '@nrwl/devkit';
import type { NestJsNormalizedOptions } from 'packages/nx/src/generators/nestjs/schema';
import { join } from 'path';

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

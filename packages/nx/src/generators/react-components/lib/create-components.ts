import { generateFiles, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { pascalCaseToSnake } from '../../../utils/pascal-case-to-snake';
import type { ReactComponentsNormalizedOptions } from '../schema';

/**
 * Creates the react components into the selected folder
 * @param tree File system implementation
 * @param options Normalized options
 */
export const createComponents = (
	tree: Tree,
	options: ReactComponentsNormalizedOptions
): void => {
	for (const componentName of options.parsedComponents) {
		const templateOptions = {
			fileName: pascalCaseToSnake(componentName),
			componentName,
			tmpl: '',
		};

		generateFiles(
			tree,
			join(__dirname, '../templates'),
			options.componentsFolder,
			templateOptions
		);
	}
};

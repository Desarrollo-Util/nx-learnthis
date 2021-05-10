import { generateFiles, Tree } from '@nrwl/devkit';
import { join } from 'path';
import type { ReactComponentsNormalizedOptions } from '../schema';

/**
 * Transforms pascal case to snake case
 * @param name Pascal case name
 * @returns Snake case name
 */
const pascalCaseToSnake = (name: string): string =>
	name.replace(/([A-Z])/g, (_, y) => '-' + y.toLowerCase()).replace(/^-/, '');

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

import { generateFiles, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { pascalCaseToSnake } from '../../../utils/pascal-case-to-snake';
import type { NestJsBcNormalizedOptions } from '../schema';

const PROVIDERS_CONSTANT: object[] = [];

const addBoundedContext = (
	tree: Tree,
	options: NestJsBcNormalizedOptions
): void => {
	const templateOptions = {
		bcSnake: options.bcNameSnake,
		bcPascal: options.bcNamePascal,
		providers: PROVIDERS_CONSTANT,
		tmpl: '',
	};

	generateFiles(
		tree,
		join(__dirname, '../templates/bounded-context'),
		`${options.baseProjectSrc}/${options.bcNameSnake}`,
		templateOptions
	);
};

const addModule = (tree: Tree, options: NestJsBcNormalizedOptions): void => {
	for (const modulePascal of options.parsedModules) {
		const moduleSnake = pascalCaseToSnake(modulePascal);
		const bc_underscore = options.bcNameSnake.replace(/\-/g, '_');
		const module_underscore = moduleSnake.replace(/\-/g, '_');

		const provider = `BC_${bc_underscore}_${module_underscore}_Providers`
			.split('_')
			.map(str => str.charAt(0).toUpperCase() + str.slice(1))
			.join('_');

		PROVIDERS_CONSTANT.push({ moduleSnake, provider });

		const templateOptions = {
			modulePascal,
			moduleSnake,
			provider,
			tmpl: '',
		};

		generateFiles(
			tree,
			join(__dirname, '../templates/module'),
			`${options.baseProjectSrc}/${options.bcNameSnake}/${moduleSnake}`,
			templateOptions
		);
	}
};

/**
 * Copies files from template directory into file system
 * @param tree File system implementation
 * @param options Template options
 */
export const addFiles = (
	tree: Tree,
	options: NestJsBcNormalizedOptions
): void => {
	addModule(tree, options);
	addBoundedContext(tree, options);
};

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
		bc: options.boundedContextName,
		providers: PROVIDERS_CONSTANT,
		tmpl: '',
	};

	generateFiles(
		tree,
		join(__dirname, '../templates/bounded-context'),
		`${options.baseProjectSrc}/${options.boundedContextName}`,
		templateOptions
	);
};

const addModule = (tree: Tree, options: NestJsBcNormalizedOptions): void => {
	for (const moduleName of options.parsedModules) {
		const folderName = pascalCaseToSnake(moduleName);
		const bc_underscore = options.boundedContextName.replace(/\-/g, '_');
		const module_underscore = folderName.replace(/\-/g, '_');

		const provider = `BC_${bc_underscore}_${module_underscore}_Providers`
			.split('_')
			.map(str => str.charAt(0).toUpperCase() + str.slice(1))
			.join('_');

		PROVIDERS_CONSTANT.push({ folderName, provider });

		const templateOptions = {
			moduleName,
			folderName,
			provider,
			tmpl: '',
		};

		generateFiles(
			tree,
			join(__dirname, '../templates/module'),
			`${options.baseProjectSrc}/${options.boundedContextName}/${folderName}`,
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

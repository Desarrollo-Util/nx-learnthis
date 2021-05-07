import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	let dependencies: Record<string, string> = {};

	let devDependencies: Record<string, string> = {
		ttypescript: '^1.5.12',
		typescript: '~4.2.4',
		'typescript-transform-paths': '^2.2.3',
		'@types/node': '^14.14.37',
	};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

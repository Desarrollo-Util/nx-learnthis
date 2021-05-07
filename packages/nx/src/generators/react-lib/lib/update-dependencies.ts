import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	let dependencies: Record<string, string> = {
		react: '^17.0.2',
	};

	let devDependencies: Record<string, string> = {
		'@types/react': '^17.0.3',
	};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

import type { Tree } from '@nrwl/devkit';
import { addPackageJsonDependencies } from '../../../utils/add-package-json-dependencies';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	const dependencies: string[] = [];

	const devDependencies: string[] = [
		'ttypescript',
		'typescript',
		'typescript-transform-paths',
		'@types/node',
	];

	addPackageJsonDependencies(tree, dependencies, devDependencies);
};

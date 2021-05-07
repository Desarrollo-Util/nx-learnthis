import type { Tree } from '@nrwl/devkit';
import { addPackageJsonDependencies } from '../../../utils/add-package-json-dependencies';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	const dependencies: string[] = ['react'];

	const devDependencies: string[] = ['@types/react'];

	addPackageJsonDependencies(tree, dependencies, devDependencies);
};

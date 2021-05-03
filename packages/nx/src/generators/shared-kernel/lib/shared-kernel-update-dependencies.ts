import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const sharedKernelUpdateDependencies = (tree: Tree): void => {
	let dependencies: Record<string, string> = {
		'@nestjs/cqrs': '^7.0.1',
		'uuid-random': '^1.3.2',
	};

	let devDependencies: Record<string, string> = {};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

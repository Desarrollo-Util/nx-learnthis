import type { Tree } from '@nrwl/devkit';
import { addPackageJsonDependencies } from '../../../utils/add-package-json-dependencies';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	const dependencies: string[] = [
		'@learnthis/nest-cqrs',
		'uuid-random',
		'@nestjs/common',
		'@nestjs/graphql',
		'@nestjs/config',
		'@nestjs/jwt',
		'@nestjs-modules/ioredis',
		'mongoose',
	];

	const devDependencies: string[] = [
		'ttypescript',
		'typescript',
		'typescript-transform-paths',
	];

	addPackageJsonDependencies(tree, dependencies, devDependencies);
};

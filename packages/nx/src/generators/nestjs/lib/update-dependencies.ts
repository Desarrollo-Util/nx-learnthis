import type { Tree } from '@nrwl/devkit';
import { addPackageJsonDependencies } from '../../../utils/add-package-json-dependencies';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	const dependencies: string[] = [
		'@learnthis/nest-cqrs',
		'@nestjs-modules/ioredis',
		'@nestjs/common',
		'@nestjs/config',
		'@nestjs/core',
		'@nestjs/graphql',
		'@nestjs/mongoose',
		'@nestjs/platform-express',
		'apollo-server-express',
		'bcrypt',
		'figlet',
		'graphql',
		'graphql-upload',
		'ioredis',
		'mongoose',
		'reflect-metadata',
		'rxjs',
		'uuid-random',
	];

	const devDependencies: string[] = [
		'@compodoc/compodoc',
		'@nestjs/cli',
		'@nestjs/schematics',
		'@nestjs/testing',
		'@types/bcrypt',
		'@types/express',
		'@types/figlet',
		'@types/ioredis',
		'@types/jest',
		'@types/node',
		'@types/supertest',
		'cpx',
		'jest',
		'rimraf',
		'supertest',
		'ts-jest',
		'ts-loader',
		'ts-node',
		'tsconfig-paths',
		'typescript',
	];

	addPackageJsonDependencies(tree, dependencies, devDependencies);
};

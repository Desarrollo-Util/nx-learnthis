import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	let dependencies: Record<string, string> = {
		'@learnthis/nest-cqrs': 'latest',
		'uuid-random': '^1.3.2',
		'@nestjs/common': '^7.6.15',
		'@nestjs/graphql': '^7.10.6',
		'@nestjs/config': '^0.6.3',
		'@nestjs/core': '^7.6.12',
		'@nestjs/jwt': '^7.2.0',
		'@nestjs/mongoose': '^7.2.3',
		'@nestjs/platform-express': '^7.6.12',
		'apollo-server-express': '^2.21.0',
		bcrypt: '^5.0.0',
		figlet: '^1.5.0',
		ioredis: '^4.22.0',
		'reflect-metadata': '^0.1.13',
		rxjs: '^6.6.3',
		'@nestjs-modules/ioredis': '^1.0.0',
		mongoose: '^5.12.7',
	};

	let devDependencies: Record<string, string> = {
		'@compodoc/compodoc': '^1.1.11',
		'@nestjs/cli': '^7.5.5',
		'@nestjs/schematics': '^7.2.7',
		'@nestjs/testing': '^7.6.12',
		'@types/bcrypt': '^3.0.0',
		'@types/express': '^4.17.11',
		'@types/figlet': '^1.2.1',
		'@types/ioredis': '^4.19.4',
		'@types/jest': '^26.0.20',
		'@types/node': '^14.14.30',
		'@types/supertest': '^2.0.10',
		rimraf: '^3.0.2',
		cpx: '^1.5.0',
		jest: '^26.6.3',
		prettier: '^2.2.1',
		supertest: '^6.1.3',
		'ts-jest': '^26.5.1',
		'ts-loader': '^8.0.17',
		'ts-node': '^9.1.1',
		'tsconfig-paths': '^3.9.0',
		typescript: '^4.1.5',
	};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

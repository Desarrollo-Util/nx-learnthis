import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	let dependencies: Record<string, string> = {
		'@learnthis/nest-cqrs': '^0.1.5',
		'@nestjs-modules/ioredis': '^1.0.0',
		'@nestjs/common': '^7.6.15',
		'@nestjs/config': '^0.6.3',
		'@nestjs/core': '^7.6.15',
		'@nestjs/graphql': '^7.10.6',
		'@nestjs/mongoose': '^7.2.4',
		'@nestjs/platform-express': '^7.6.15',
		'apollo-server-express': '^2.24.0',
		bcrypt: '^5.0.1',
		figlet: '^1.5.0',
		graphql: '^15.5.0',
		'graphql-upload': '11.0.0',
		ioredis: '^4.27.2',
		mongoose: '^5.12.7',
		'reflect-metadata': '^0.1.13',
		rxjs: '^7.0.0',
		'uuid-random': '^1.3.2',
	};

	let devDependencies: Record<string, string> = {
		'@compodoc/compodoc': '^1.1.11',
		'@nestjs/cli': '^7.6.0',
		'@nestjs/schematics': '^7.3.1',
		'@nestjs/testing': '^7.6.15',
		'@types/bcrypt': '^3.0.1',
		'@types/express': '^4.17.11',
		'@types/figlet': '^1.5.1',
		'@types/ioredis': '^4.26.1',
		'@types/jest': '^26.0.23',
		'@types/node': '^15.0.2',
		'@types/supertest': '^2.0.11',
		cpx: '^1.5.0',
		jest: '^26.6.3',
		rimraf: '^3.0.2',
		supertest: '^6.1.3',
		'ts-jest': '^26.5.6',
		'ts-loader': '^9.1.2',
		'ts-node': '^9.1.1',
		'tsconfig-paths': '^3.9.0',
		typescript: '^4.2.4',
	};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

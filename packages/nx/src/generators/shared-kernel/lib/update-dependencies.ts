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
		'@nestjs/jwt': '^7.2.0',
		'@nestjs-modules/ioredis': '^1.0.0',
		mongoose: '^5.12.7',
	};

	let devDependencies: Record<string, string> = {
		ttypescript: '^1.5.12',
		typescript: '~4.2.4',
		'typescript-transform-paths': '^2.2.3',
	};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

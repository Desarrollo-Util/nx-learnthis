import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';
import {
	dependencies,
	devDependencies,
} from '../constants/dependencies/dependencies.json';

/**
 * Adds a list of dependencies and devDependencies to global package.json
 * @param tree File system implementation
 * @param deps Dependencies to add
 * @param devDeps DevDependencies to add
 */
export const addPackageJsonDependencies = (
	tree: Tree,
	deps: string[],
	devDeps: string[]
): void => {
	const dependenciesObject = Object.entries(dependencies)
		.filter((tuple: [string, string]) => deps.includes(tuple[0]))
		.reduce(
			(
				allDependencies: Record<string, string>,
				dependency: [string, string]
			) => {
				allDependencies[dependency[0]] = dependency[1];
				return allDependencies;
			},
			{}
		);

	const devDependenciesObject = Object.entries(devDependencies)
		.filter((tuple: [string, string]) => devDeps.includes(tuple[0]))
		.reduce(
			(
				allDependencies: Record<string, string>,
				dependency: [string, string]
			) => {
				allDependencies[dependency[0]] = dependency[1];
				return allDependencies;
			},
			{}
		);

	addDependenciesToPackageJson(tree, dependenciesObject, devDependenciesObject);
};

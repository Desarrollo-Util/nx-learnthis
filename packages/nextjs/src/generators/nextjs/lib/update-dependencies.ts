import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (tree: Tree): void => {
	const dependencies: Record<string, string> = {
		next: '^10.1.3',
		react: '^17.0.2',
		'react-dom': '^17.0.2',
	};

	const devDependencies: Record<string, string> = {
		'@types/node': '^14.14.37',
		'@types/react': '^17.0.3',
		'@types/react-dom': '^17.0.3',
		'stylelint-config-recommended': '^4.0.0',
		tailwindcss: '^2.1.1',
	};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

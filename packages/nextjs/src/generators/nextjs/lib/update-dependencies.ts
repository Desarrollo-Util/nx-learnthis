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
		'react-toastify': '^7.0.3',
		cookie: '^0.4.1',
		formik: '^2.2.6',
		yup: '^0.32.9',
	};

	const devDependencies: Record<string, string> = {
		'@types/node': '^14.14.37',
		'@types/react': '^17.0.3',
		'@types/react-dom': '^17.0.3',
		'@types/yup': '^0.29.11',
		autoprefixer: '^10.2.5',
		postcss: '^8.2.9',
		'stylelint-config-recommended': '^4.0.0',
		tailwindcss: '^2.1.1',
	};

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

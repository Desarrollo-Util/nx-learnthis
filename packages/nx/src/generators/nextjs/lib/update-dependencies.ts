import type { Tree } from '@nrwl/devkit';
import { addPackageJsonDependencies } from '../../../utils/add-package-json-dependencies';
import type { NextJsNormalizedOptions } from '../schema';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (
	tree: Tree,
	options: NextJsNormalizedOptions
): void => {
	const dependencies: string[] = ['next', 'react', 'react-dom', 'cookie'];

	const devDependencies: string[] = [
		'@babel/core',
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript',
		'@types/node',
		'@types/react',
		'@types/react-dom',
		'@types/cookie',
		'autoprefixer',
		'postcss',
		'stylelint-config-recommended',
		'tailwindcss',
		'learnthis-tailwind-utils',
	];

	if (options.template === 'auth') {
		dependencies.push(
			'@urql/exchange-auth',
			'@urql/exchange-multipart-fetch',
			'urql',
			'next-urql',
			'graphql',
			'jsonwebtoken'
		);

		devDependencies.push('@types/jsonwebtoken');
	}

	if (options.useToast) dependencies.push('react-toastify');

	if (options.useFormikAndYup) {
		dependencies.push('formik', 'yup');

		devDependencies.push('@types/yup');
	}

	if (options.useUuid) dependencies.push('uuid-random');

	addPackageJsonDependencies(tree, dependencies, devDependencies);
};

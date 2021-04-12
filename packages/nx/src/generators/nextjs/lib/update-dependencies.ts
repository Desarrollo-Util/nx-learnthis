import { addDependenciesToPackageJson, Tree } from '@nrwl/devkit';
import { NormalizedSchema } from '../schema';

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
export const updateDependencies = (
	tree: Tree,
	options: NormalizedSchema
): void => {
	let dependencies: Record<string, string> = {
		next: '^10.1.3',
		react: '^17.0.2',
		'react-dom': '^17.0.2',
		cookie: '^0.4.1',
	};

	let devDependencies: Record<string, string> = {
		'@babel/core': '7.9.6',
		'@babel/preset-env': '7.9.6',
		'@babel/preset-react': '7.9.4',
		'@babel/preset-typescript': '7.9.0',
		'@types/node': '^14.14.37',
		'@types/react': '^17.0.3',
		'@types/react-dom': '^17.0.3',
		'@types/cookie': '^0.4.0',
		autoprefixer: '^10.2.5',
		postcss: '^8.2.9',
		'stylelint-config-recommended': '^4.0.0',
		tailwindcss: '^2.1.1',
		'learnthis-tailwind-utils': '^0.0.6',
	};

	if (options.template === 'auth') {
		dependencies = {
			...dependencies,
			'@urql/exchange-auth': '^0.1.2',
			'@urql/exchange-multipart-fetch': '^0.1.11',
			urql: '^2.0.2',
			'next-urql': '^3.0.1',
			graphql: '^15.5.0',
			jsonwebtoken: '^8.5.1',
		};

		devDependencies = {
			...devDependencies,
			'@types/jsonwebtoken': '^8.5.1',
		};
	}

	if (options.useToast) {
		dependencies = {
			...dependencies,
			'react-toastify': '^7.0.3',
		};
	}

	if (options.useFormikAndYup) {
		dependencies = {
			...dependencies,
			formik: '^2.2.6',
			yup: '^0.32.9',
		};

		devDependencies = {
			...devDependencies,
			'@types/yup': '^0.29.11',
		};
	}

	if (options.useUuid) {
		dependencies = {
			...dependencies,
			'uuid-random': '^1.3.2',
		};
	}

	addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

import type { Tree } from '@nrwl/devkit';
import { addFiles, normalizeOptions } from './lib';
import type { NestJsBcCLIOptions } from './schema';

export default async (tree: Tree, options: NestJsBcCLIOptions) => {
	const normalizedOptions = normalizeOptions(tree, options);
	if (
		tree.exists(
			`${normalizedOptions.baseProjectSrc}/${normalizedOptions.boundedContextName}`
		)
	)
		throw new Error(
			`$${normalizedOptions.boundedContextName} folder already exists`
		);

	addFiles(tree, normalizedOptions);
};

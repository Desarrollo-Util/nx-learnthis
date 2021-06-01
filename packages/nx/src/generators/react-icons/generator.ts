import type { Tree } from '@nrwl/devkit';
import { createComponents, normalizeOptions } from './lib';
import type { ReactIconsCLIOptions } from './schema';

export default async (tree: Tree, options: ReactIconsCLIOptions) => {
	const normalizedOptions = normalizeOptions(tree, options);
	createComponents(tree, normalizedOptions);
};

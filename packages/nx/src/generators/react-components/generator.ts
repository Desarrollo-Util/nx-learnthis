import type { Tree } from '@nrwl/devkit';
import { createComponents, normalizeOptions } from './lib';
import type { ReactComponentsCLIOptions } from './schema';

export default async (tree: Tree, options: ReactComponentsCLIOptions) => {
	const normalizedOptions = normalizeOptions(tree, options);
	createComponents(tree, normalizedOptions);
};

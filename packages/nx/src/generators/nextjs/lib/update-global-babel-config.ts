import { Tree, updateJson, writeJson } from '@nrwl/devkit';

const BABEL_CONFIG_FILE = 'babel.config.json';

/**
 * Creates or updates workspace babel.config
 * @param tree File system implementation
 */
export const updateGlobalBabelConfig = (tree: Tree): void => {
	const BABEL_CONFIG_CONTENT = {
		babelrcRoots: ['*'],
	};

	if (tree.exists(BABEL_CONFIG_FILE)) {
		updateJson(tree, BABEL_CONFIG_FILE, (value: any) => {
			return {
				...value,
				...BABEL_CONFIG_CONTENT,
			};
		});
	} else {
		writeJson(tree, BABEL_CONFIG_FILE, BABEL_CONFIG_CONTENT);
	}
};

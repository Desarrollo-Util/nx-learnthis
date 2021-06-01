import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { Tags } from '../../../constants/tags.enum';
import { isPascalCase } from '../../../utils/pascal-case-to-snake';
import type {
	ReactIconsCLIOptions,
	ReactIconsNormalizedOptions,
} from '../schema';

/**
 * Normalizes generator options obtained from CLI
 * @param tree Custom file system implementation
 * @param options CLI options
 * @returns Normalized options
 */
export const normalizeOptions = (
	tree: Tree,
	options: ReactIconsCLIOptions
): ReactIconsNormalizedOptions => {
	const conf = readProjectConfiguration(tree, options.name);

	if (!conf.tags?.includes(Tags.REACT))
		throw new Error(`${options.name} is not a React project`);

	const componentsFolder = `${conf.sourceRoot}/components/tmp`;

	const parsedComponents = [
		...new Set(
			options.components
				.split(',')
				.filter(c => !!c)
				.map(component => {
					const trimmed = component.trim();
					if (!isPascalCase(trimmed))
						throw new Error(`Invalid component name for ${trimmed}`);

					return trimmed;
				})
		),
	];

	return {
		componentsFolder,
		parsedComponents,
	};
};

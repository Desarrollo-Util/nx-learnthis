import { readProjectConfiguration, Tree } from '@nrwl/devkit';
import { Tags } from '../../../constants/tags.enum';
import { findProjectsByTag } from '../../../utils/find-projects-by-tag';
import {
	isPascalCase,
	pascalCaseToSnake,
} from '../../../utils/pascal-case-to-snake';
import type { NestJsBcCLIOptions, NestJsBcNormalizedOptions } from '../schema';

/**
 * Normalizes generator options obtained from CLI, adding:
 *  - name: Project name
 *  - directory: Project directory
 *  - root folder: Project's root folder
 *  - tags: Project's tags
 * @param tree Custom file system implementation
 * @param options CLI options
 * @returns Normalized options
 */
export const normalizeOptions = (
	tree: Tree,
	options: NestJsBcCLIOptions
): NestJsBcNormalizedOptions => {
	const bcNamePascal = options.bcNamePascal.trim();
	if (!isPascalCase(bcNamePascal))
		throw new Error(`${options.bcNamePascal} is not a valid BC name`);

	const baseProjectConf = readProjectConfiguration(
		tree,
		options.baseProjectName
	);

	if (!baseProjectConf.tags?.includes(Tags.NESTJS_APP))
		throw new Error(`${options.baseProjectName} is not a Nest.JS project`);

	const baseProjectSrc = baseProjectConf.sourceRoot as string;

	const parsedModules = [
		...new Set(
			options.modules
				.split(',')
				.filter(c => !!c)
				.map(module => {
					const trimmed = module.trim();
					if (!isPascalCase(trimmed))
						throw new Error(`Invalid module name for ${trimmed}`);

					return trimmed;
				})
		),
	];

	const sharedAlias = findProjectsByTag(tree, Tags.NEST_SHARED)[0];

	return {
		...options,
		sharedAlias,
		bcNamePascal,
		bcNameSnake: pascalCaseToSnake(bcNamePascal),
		baseProjectSrc,
		parsedModules,
	};
};

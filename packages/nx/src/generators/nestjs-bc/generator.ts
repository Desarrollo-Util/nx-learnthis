import type { Tree } from '@nrwl/devkit';
import prompts from 'prompts';
import { Tags } from '../../constants/tags.enum';
import { findProjectsByTag } from '../../utils/find-projects-by-tag';
import { addFiles, normalizeOptions } from './lib';
import type { NestJsBcCLIOptions } from './schema';

export default async (tree: Tree, options: NestJsBcCLIOptions) => {
	const nestProjects = findProjectsByTag(tree, Tags.NESTJS_APP);
	const targetProject = (
		await prompts({
			type: 'select',
			name: 'value',
			message: 'NestJs base project name',
			choices: nestProjects.map(p => ({ title: p, value: p })),
		})
	).value;
	options = {
		...options,
		baseProjectName: targetProject,
	};
	const normalizedOptions = normalizeOptions(tree, options);
	if (
		tree.exists(
			`${normalizedOptions.baseProjectSrc}/${normalizedOptions.bcNamePascal}`
		)
	)
		throw new Error(`$${normalizedOptions.bcNamePascal} folder already exists`);

	addFiles(tree, normalizedOptions);
};

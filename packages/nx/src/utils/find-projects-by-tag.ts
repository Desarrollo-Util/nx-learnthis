import { readJson, Tree } from '@nrwl/devkit';

/**
 * Returns an array of the names of existing projects that contains a specified tag
 * @param tree File system implementation
 * @param tag Tag to search for
 * @returns Array of projects or empty array
 */
export const findProjectsByTag = (tree: Tree, tag: string): string[] => {
	const { projects } = readJson(tree, 'nx.json');

	const projectNames = [];

	for (const project of Object.entries(projects)) {
		const tags = (project[1] as any).tags as string[];

		if (tags.indexOf(tag) >= 0) projectNames.push(project[0]);
	}

	return projectNames;
};

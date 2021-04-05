import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  installPackagesTask,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { NextJsGeneratorCLIOptions } from './schema';

interface NormalizedSchema extends NextJsGeneratorCLIOptions {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

/**
 * Updates package.json with the new dependencies
 * @param tree File system implementation
 */
const updateDependencies = (tree: Tree): void => {
  const dependencies: Record<string, string> = {
    next: 'latest',
    react: '^17.0.1',
    'react-dom': '^17.0.1',
  };

  const devDependencies: Record<string, string> = {
    '@types/node': '^12.12.21',
    '@types/react': '^17.0.2',
    '@types/react-dom': '^17.0.1',
    typescript: '4.0',
  };

  addDependenciesToPackageJson(tree, dependencies, devDependencies);
};

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
const normalizeOptions = (
  tree: Tree,
  options: NextJsGeneratorCLIOptions
): NormalizedSchema => {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).appsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
};

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

export default async function (tree: Tree, options: NextJsGeneratorCLIOptions) {
  const normalizedOptions = normalizeOptions(tree, options);
  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'application',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      build: {
        executor: '@nx-learnthis/nextjs:build',
      },
    },
    tags: normalizedOptions.parsedTags,
  });
  addFiles(tree, normalizedOptions);

  // Formats all created files using Prettier
  await formatFiles(tree);

  updateDependencies(tree);

  return () => {
    // Installs all package.json dependencies if not already installed
    installPackagesTask(tree);
  };
}

import { names } from '@nrwl/devkit';
import type { DockerCLIOptions, DockerGeneratorOptions } from '../schema';

/**
 * Normalizes CLI options
 * @param options CLI options
 * @returns Normalized options
 */
export const normalizeOptions = (
	options: DockerCLIOptions
): DockerGeneratorOptions => ({
	...options,
	prefix: names(options.prefix).fileName.replace(new RegExp('/', 'g'), '-'),
	networkName: `${options.prefix}-network`,
});

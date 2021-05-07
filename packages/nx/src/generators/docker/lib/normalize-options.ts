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
	networkName: `${options.prefix}-network`,
});

import type { DockerGeneratorOptions } from '../schema';
import type { DockerCompose } from '../types/docker-compose.type';

/**
 * Creates an empty docker compose structure
 * @param options Normalized options
 * @returns Docker compose
 */
export const createBaseDockerCompose = (
	options: DockerGeneratorOptions
): DockerCompose => ({
	version: '3.7',
	services: {},
	volumes: {},
	networks: { [options.networkName]: { driver: 'bridge' } },
});

import type { DockerGeneratorOptions } from '../schema';
import type { DockerCompose } from '../types/docker-compose.type';

/** Redis docker service name */
const REDIS_SERVICE_NAME = 'redis';
/** Redis commander docker service name */
const REDIS_COMMANDER_SERVICE_NAME = 'redis-commander';
/** Redis docker volume name */
const REDIS_VOLUME_NAME = 'redis-data';

/**
 * Includes redis and redis-commander containers into docker compose
 * @param dockerCompose Docker compose
 * @param options Normalized options
 */
export const includeRedisContainers = (
	dockerCompose: DockerCompose,
	options: DockerGeneratorOptions
): void => {
	const redisContainerName = `${options.prefix}_dev_redis`;
	const redisCommanderContainerName = `${options.prefix}_dev_redis_commander`;

	// Set redis data volume
	dockerCompose.volumes[REDIS_VOLUME_NAME] = {};

	// Redis container
	dockerCompose.services[REDIS_SERVICE_NAME] = {
		container_name: redisContainerName,
		image: 'redis:alpine',
		command: 'redis-server --appendonly yes',
		ports: ['6379:6379'],
		volumes: [`${REDIS_VOLUME_NAME}:/data`],
		networks: [options.networkName],
	};

	// Redis commander container
	dockerCompose.services[REDIS_COMMANDER_SERVICE_NAME] = {
		container_name: redisCommanderContainerName,
		hostname: 'redis-commander',
		image: 'rediscommander/redis-commander:latest',
		environment: [
			'REDIS_HOSTS=local:redis:6379',
			'HTTP_USER=root',
			'HTTP_PASSWORD=admin',
		],
		ports: ['8083:8081'],
		networks: [options.networkName],
	};
};

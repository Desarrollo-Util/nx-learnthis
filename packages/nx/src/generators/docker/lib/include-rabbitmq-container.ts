import type { DockerGeneratorOptions } from '../schema';
import type { DockerCompose } from '../types/docker-compose.type';

/** Mongo docker service name */
const RABBIT_MQ_SERVICE_NAME = 'rabbitmq';

/**
 * Includes rabbitmq container into docker compose
 * @param dockerCompose Docker compose
 * @param options Normalized options
 */
export const includeRabbitMQContainer = (
	dockerCompose: DockerCompose,
	options: DockerGeneratorOptions
): void => {
	const rabbitMQContainerName = `${options.prefix}_dev_rabbitmq`;

	dockerCompose.services[RABBIT_MQ_SERVICE_NAME] = {
		container_name: rabbitMQContainerName,
		image: 'rabbitmq:management-alpine',
		environment: {
			RABBITMQ_DEFAULT_USER: 'root',
			RABBITMQ_DEFAULT_PASS: 'admin',
		},
		ports: ['5672:5672', '15672:15672'],
	};
};

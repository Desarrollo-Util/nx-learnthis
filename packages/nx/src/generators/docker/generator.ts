import type { Tree } from '@nrwl/devkit';
import yaml from 'yaml';
import { DOCKER_COMPOSE_FILE_NAME } from '../../constants/docker-compose-file-name.constant';
import { DOCKER_MONGO_CONFIG_FILE } from '../../constants/docker-mongo-config-file.constant';
import {
	createBaseDockerCompose,
	includeMailhogContainer,
	includeMongoDBContainers,
	includeRabbitMQContainer,
	includeRedisContainers,
	normalizeOptions,
} from './lib';
import { updatePackageJsonScripts } from './lib/update-package-json-scripts';
import type { DockerCLIOptions } from './schema';

export default async (tree: Tree, options: DockerCLIOptions) => {
	const normalizedOptions = normalizeOptions(options);

	if (
		tree.exists(DOCKER_COMPOSE_FILE_NAME) ||
		tree.exists(DOCKER_MONGO_CONFIG_FILE)
	)
		throw new Error(
			`Already exists a ${DOCKER_COMPOSE_FILE_NAME} or ${DOCKER_MONGO_CONFIG_FILE} in this directory. Please remove it before execute this generator`
		);

	const dockerCompose = createBaseDockerCompose(normalizedOptions);

	if (normalizedOptions.mongodb)
		includeMongoDBContainers(dockerCompose, normalizedOptions);

	if (normalizedOptions.redis)
		includeRedisContainers(dockerCompose, normalizedOptions);

	if (normalizedOptions.rabbitmq)
		includeRabbitMQContainer(dockerCompose, normalizedOptions);

	if (normalizedOptions.mailhog)
		includeMailhogContainer(dockerCompose, normalizedOptions);

	const yamlDockerCompose = yaml.stringify(dockerCompose);

	tree.write(DOCKER_COMPOSE_FILE_NAME, yamlDockerCompose);
	tree.write(DOCKER_MONGO_CONFIG_FILE, '');

	updatePackageJsonScripts(tree, normalizedOptions);
};

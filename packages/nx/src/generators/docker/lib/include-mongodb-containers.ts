import { DOCKER_MONGO_CONFIG_FILE } from '../../../constants/docker-mongo-config-file.constant';
import type { DockerGeneratorOptions } from '../schema';
import type { DockerCompose } from '../types/docker-compose.type';

/** Mongo docker service name */
const MONGO_SERVICE_NAME = 'mongodb-primary';
/** Mongo express docker service name */
const MONGO_EXPRESS_SERVICE_NAME = 'mongo-express';
/** Mongo docker volume name */
const MONGO_VOLUME_NAME = 'mongodb_data_container';

/**
 * Includes mongodb and mongo express containers into docker compose
 * @param dockerCompose Docker compose
 * @param options Normalized options
 */
export const includeMongoDBContainers = (
	dockerCompose: DockerCompose,
	options: DockerGeneratorOptions
): void => {
	const mongoContainerName = `${options.prefix}_dev_mongodb`;
	const mongoExpressContainerName = `${options.prefix}_dev_mongo_express`;

	// MongoDB data volume
	dockerCompose.volumes[MONGO_VOLUME_NAME] = { driver: 'local' };

	// MongoDB container
	dockerCompose.services[MONGO_SERVICE_NAME] = {
		container_name: mongoContainerName,
		image: 'docker.io/bitnami/mongodb:latest',
		environment: [
			'MONGODB_ADVERTISED_HOSTNAME=localhost',
			'MONGODB_REPLICA_SET_MODE=primary',
			'MONGODB_ROOT_PASSWORD=admin',
			'MONGODB_REPLICA_SET_KEY=replicasetkey123',
			`MONGODB_REPLICA_SET_NAME=${options.prefix}`,
		],
		ports: ['27017:27017'],
		expose: [27017],
		volumes: [
			`./${DOCKER_MONGO_CONFIG_FILE}:/docker-entrypoint-initdb.d/init-mongo.js:ro`,
			`${MONGO_VOLUME_NAME}:/bitnami/mongodb`,
		],
		networks: [options.networkName],
	};

	// Mongo express container
	dockerCompose.services[MONGO_EXPRESS_SERVICE_NAME] = {
		container_name: mongoExpressContainerName,
		image: 'mongo-express:latest',
		ports: ['8081:8081'],
		environment: {
			ME_CONFIG_BASICAUTH_USERNAME: 'root',
			ME_CONFIG_BASICAUTH_PASSWORD: 'admin',
			ME_CONFIG_MONGODB_SERVER: mongoContainerName,
			ME_CONFIG_MONGODB_ADMINUSERNAME: 'root',
			ME_CONFIG_MONGODB_ADMINPASSWORD: 'admin',
		},
		depends_on: [MONGO_SERVICE_NAME],
		links: [MONGO_SERVICE_NAME],
		networks: [options.networkName],
	};
};

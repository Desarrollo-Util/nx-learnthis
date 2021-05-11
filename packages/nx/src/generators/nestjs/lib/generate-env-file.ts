import type { Tree } from '@nrwl/devkit';
import yaml from 'yaml';
import { DOCKER_COMPOSE_FILE_NAME } from '../../../constants/docker-compose-file-name.constant';
import { DOCKER_MONGO_CONFIG_FILE } from '../../../constants/docker-mongo-config-file.constant';
import type { DockerCompose } from '../../docker/types/docker-compose.type';
import type { NestJsNormalizedOptions } from '../schema';

/**
 * Updates init-mongo to register a new database, and returns a MongoDB connection uri for this
 * @param tree File system implementation
 * @param options Normalized options
 * @returns MongoDB connection uri
 */
const writeInitMongoAndGetConnectionString = (
	tree: Tree,
	options: NestJsNormalizedOptions
): string => {
	const projectNameUnderscored = options.projectName.replace(/\-/g, '_');
	const db = `${projectNameUnderscored}_db`;
	const user = projectNameUnderscored;
	const password = projectNameUnderscored;

	let initMongo = (tree.read(DOCKER_MONGO_CONFIG_FILE) as Buffer).toString(
		'utf-8'
	);

	initMongo += '\n';
	initMongo += `db = db.getSiblingDB('${db}');\n`;
	initMongo += `db.createUser({\n`;
	initMongo += `\tuser: '${user}',\n`;
	initMongo += `\tpwd: '${password}',\n`;
	initMongo += `\troles: [{ role: 'readWrite', db: '${db}' }],\n`;
	initMongo += `});\n`;

	tree.write(DOCKER_MONGO_CONFIG_FILE, initMongo);

	return `mongodb://${user}:${password}@localhost/${db}`;
};

/**
 * Gets Redis connection URI from docker compose
 * @param dockerParsed Docker compose
 * @returns Redis connection URI
 */
const getRedisUri = (dockerParsed: DockerCompose): string => {
	return `redis://localhost:${
		dockerParsed.services['redis'].ports[0].split(':')[0]
	}`;
};

/**
 * Gets RabbitMQ connection URI from docker compose
 * @param dockerParsed Docker compose
 * @returns RabbitMQ connection URI
 */
const getRabbitMqUri = (dockerParsed: DockerCompose): string => {
	const user =
		dockerParsed.services['rabbitmq'].environment.RABBITMQ_DEFAULT_USER;

	const password =
		dockerParsed.services['rabbitmq'].environment.RABBITMQ_DEFAULT_PASS;

	const port = dockerParsed.services['rabbitmq'].ports[0].split(':')[0];

	return `amqp://${user}:${password}@localhost:${port}`;
};

/**
 * Generates an env file from docker compose and creates a new database connection
 * @param tree File system implementation
 * @param options Normalized options
 */
export const generateEnvFile = (
	tree: Tree,
	options: NestJsNormalizedOptions
) => {
	if (!tree.exists(DOCKER_COMPOSE_FILE_NAME))
		throw new Error(`Missing ${DOCKER_COMPOSE_FILE_NAME} in the root folder`);

	if (!tree.exists(DOCKER_MONGO_CONFIG_FILE))
		throw new Error(`Missing ${DOCKER_MONGO_CONFIG_FILE} in the root folder`);

	const dockerFile = (tree.read(DOCKER_COMPOSE_FILE_NAME) as Buffer).toString();
	const dockerParsed: DockerCompose = yaml.parse(dockerFile);

	console.log(dockerParsed.services);

	const mongoUri = writeInitMongoAndGetConnectionString(tree, options);
	const redisUri = getRedisUri(dockerParsed);
	const rabbitmqUri = getRabbitMqUri(dockerParsed);

	let env = '';
	env += '# ENVIRONMENT\n';
	env += 'PORT=3000\n';
	env += "NODE_ENV='dev'\n";
	env += "SELF_DOMAIN='http://localhost'\n";
	env += '\n';
	env += '# DATABASES AND SERVICES\n';
	env += `DATABASE_URI='${mongoUri}'\n`;
	env += `REDIS_URI='${redisUri}'\n`;
	env += `RABBITMQ_URI='${rabbitmqUri}'\n`;
	env += 'RABBITMQ_CONN_TIMEOUT=20000\n';
	env += 'RABBITMQ_RETRY_TTL=5000\n';
	env += 'RABBITMQ_RETRIES=5\n';
	env += '\n';
	env += '# TOKENS\n';
	env += "USER_JWT_SECRET='123456789'\n";

	console.log(env);

	tree.write(`${options.projectRoot}/.env`, env);
};

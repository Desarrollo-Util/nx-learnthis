import type { DockerGeneratorOptions } from '../schema';
import type { DockerCompose } from '../types/docker-compose.type';

/** Mailhog docker service name */
const MAILHOG_SERVICE_NAME = 'mailhog';
/** Mailhog docker volume name */
const MAILHOG_VOLUME_NAME = 'maildir';

/**
 * Includes mailhog container into docker compose
 * @param dockerCompose Docker compose
 * @param options Normalized options
 */
export const includeMailhogContainer = (
	dockerCompose: DockerCompose,
	options: DockerGeneratorOptions
): void => {
	const mailhogContainerName = `${options.prefix}_dev_mailhog`;

	// Maildir volume
	dockerCompose.volumes[MAILHOG_VOLUME_NAME] = {};

	// Mailhog container
	dockerCompose.services[MAILHOG_SERVICE_NAME] = {
		container_name: mailhogContainerName,
		image: 'mailhog/mailhog:latest',
		ports: ['1080:8025', '1025:1025'],
		environment: { MH_STORAGE: MAILHOG_VOLUME_NAME, MH_MAILDIR_PATH: '/tmp' },
		volumes: ['maildir:/tmp'],
	};
};

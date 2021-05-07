/** Values obtained from CLI */
export interface DockerCLIOptions {
	/** Prefix for container names */
	prefix: string;
	/** Include mongodb and mongo-express containers */
	mongodb: boolean;
	/** Include redis and redis-commander containers */
	redis: boolean;
	/** Include rabbitmq container */
	rabbitmq: boolean;
	/** Include mailhog container */
	mailhog: boolean;
}

/** Normalized options */
export interface DockerGeneratorOptions extends DockerCLIOptions {
	/** Default network name */
	networkName: string;
}

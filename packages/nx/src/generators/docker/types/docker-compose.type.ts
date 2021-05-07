/** Docker compose file */
export type DockerCompose = {
	/** Docker version */
	version: string;
	/** Docker services */
	services: Record<string, any>;
	/** Docker volumes */
	volumes: Record<string, any>;
	/** Docker networks */
	networks: Record<string, any>;
};

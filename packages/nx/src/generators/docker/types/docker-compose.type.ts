/** Docker compose file */
export type DockerCompose = {
	/** Docker version */
	version: string;
	/** Docker services */
	services: Record<string, object>;
	/** Docker volumes */
	volumes: Record<string, object>;
	/** Docker networks */
	networks: Record<string, object>;
};

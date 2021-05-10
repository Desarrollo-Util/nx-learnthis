/**
 * Transforms pascal case to snake case
 * @param name Pascal case name
 * @returns Snake case name
 */
export const pascalCaseToSnake = (name: string): string =>
	name.replace(/([A-Z])/g, (_, y) => '-' + y.toLowerCase()).replace(/^-/, '');

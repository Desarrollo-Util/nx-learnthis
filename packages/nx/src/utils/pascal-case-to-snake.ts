/**
 * Transforms pascal case to snake case
 * @param name Pascal case name
 * @returns Snake case name
 */
export const pascalCaseToSnake = (name: string): string =>
	name.replace(/([A-Z])/g, (_, y) => '-' + y.toLowerCase()).replace(/^-/, '');

/**
 * Validate if a name has pascal case format
 * @param name Pascal case name
 * @returns isPascalCase
 */
export const isPascalCase = (name: string): boolean =>
	!!name.match(/^[A-Z][a-zA-Z]+/g);

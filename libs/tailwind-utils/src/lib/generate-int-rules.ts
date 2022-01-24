/**
 * Generates a set of int-based rules with an increment of 1 between from and to values.
 *
 *  - Ex: From 0 to 2 -> { 0: 0 , 1: 1 , 2: 2 }
 *
 * @param from From value
 * @param to To value
 * @returns Rules
 */
export const generateIntRules = (from: number, to: number) => {
	if (
		typeof from !== 'number' ||
		typeof to !== 'number' ||
		!Number.isInteger(from) ||
		!Number.isInteger(to)
	)
		throw new Error(
			'generateIntRules: "from" and "to" must be provided as integer numbers'
		);

	const rules: Record<string, string> = {};

	for (let i = from; i <= to; i++) {
		rules[`${i}`] = `${i}`;
	}

	return rules;
};

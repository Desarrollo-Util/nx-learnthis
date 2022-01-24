/**
 * Generates a set of rem-based rules with an increment of 1 between from and to values.
 *
 *  - Ex: From 0 to 1 with increment of 0.5 -> { '0': '0rem' , '0_5': '0.5rem , '1': '1rem' }
 *
 * @param from From value
 * @param to To value
 * @param increment Increment between rules
 * @returns Rules
 */
export const generateRemRules = (
	from: number,
	to: number,
	increment: number
) => {
	if (
		typeof from !== 'number' ||
		typeof to !== 'number' ||
		typeof increment !== 'number'
	)
		throw new Error(
			'generateRemRules: "from", "to" and "increment" must be provided as numbers'
		);

	const rules: Record<string, string> = {};

	for (let i = from; i <= to; i += increment) {
		const name = i.toString().replace('.', '_');
		rules[name] = `${i}rem`;
	}

	return rules;
};

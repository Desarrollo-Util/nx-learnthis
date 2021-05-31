/**
 * Generates a set of column rules based on an array of number of columns.
 *
 * Ex: [2,3] => { '1/2': '50%', '1/3': '33.333333%', '2/3': '66.666666%' }
 *
 * @param columns Array with the number of columns
 * @returns Rules
 */
export const generateColumnRules = (
	columns: number[]
): Record<string, string> => {
	const rules: Record<string, string> = {};

	columns.forEach(column => {
		if (!Number.isInteger(column))
			throw new Error('generateColumnRules: all elements must be integers');

		for (let i = 1; i < column; i++) {
			const ruleName = `${i}/${column}`;
			const value = +((i * 100) / column).toFixed(6);

			rules[ruleName] = `${value}%`;
		}
	});

	return rules;
};

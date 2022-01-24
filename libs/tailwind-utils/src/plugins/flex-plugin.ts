import tailwindPlugin from 'tailwindcss/plugin';

/**
 * A plugin that creates flex based classes
 * @param variants Tailwind variants
 * @returns Tailwind plugin
 */
export const flexPlugin = (variants?: string[]) =>
	tailwindPlugin(({ addUtilities }) => {
		const source: [Object, string][] = [
			[{ display: 'flex' }, '.flex'],
			[{ display: 'flex', flexDirection: 'column' }, '.flexcol'],
		];

		const justifyContent: [string, string][] = [
			['center', 'c'],
			['flex-start', 's'],
			['flex-end', 'e'],
			['space-around', 'sa'],
			['space-between', 'sb'],
			['space-evenly', 'se'],
		];

		const alignItems: [string, string][] = [
			['center', 'c'],
			['flex-start', 's'],
			['flex-end', 'e'],
			['stretch', 'st'],
			['baseline', 'bs'],
		];

		const rules: Record<string, Object>[] = [];

		for (const flex of source) {
			for (const justify of justifyContent) {
				for (const align of alignItems) {
					const className = [flex[1], justify[1], align[1]].join('-');
					const style = {
						...flex[0],
						justifyContent: justify[0],
						alignItems: align[0],
					};
					const rule = {};
					rule[className] = style;

					rules.push(rule);
				}
			}
		}

		addUtilities(rules, variants);
	});

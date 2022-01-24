import plugin from 'tailwindcss/plugin';

/**
 * A plugin that creates truncate lines classes
 * @param maxLines Maximum number of lines
 * @param variants Tailwind variants
 * @returns Tailwind plugin
 */
export const truncatePlugin = (maxLines: number, variants?: string[]) =>
	plugin(({ addUtilities }) => {
		if (typeof maxLines !== 'number')
			throw new Error('truncatePlugin: "maxLines" must be provided as number');

		const rules: Record<string, Object>[] = [];

		for (let i = 1; i <= maxLines; i++) {
			const name = `.truncate-${String(i)}-lines`;
			const style = {
				overflow: 'hidden',
				display: '-webkit-box',
				'-webkit-line-clamp': `${String(i)}`,
				'-webkit-box-orient': 'vertical',
			};

			const rule = {};
			rule[name] = style;
			rules.push(rule);
		}

		addUtilities(rules, variants);
	});

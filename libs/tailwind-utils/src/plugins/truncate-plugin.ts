import tailwindPlugin from 'tailwindcss/plugin';
import type { TailwindVariants } from '../types/variants.type';

/**
 * A plugin that creates truncate lines classes
 * @param maxLines Maximum number of lines
 * @param increment Increment between rules
 * @param variants Tailwind variants
 * @returns Tailwind plugin
 */
export const truncatePlugin = (
	maxLines: number,
	variants?: TailwindVariants[]
) =>
	tailwindPlugin(({ addUtilities }) => {
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

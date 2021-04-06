import tailwindPlugin from 'tailwindcss/plugin';
import { TailwindVariants } from '../types/variants.type';

/**
 * A plugin that creates absolute position classes
 * @param from From value
 * @param to To value
 * @param increment Increment between rules
 * @param variants Tailwind variants
 * @returns Tailwind plugin
 */
export const absolutePlugin = (
	from: number,
	to: number,
	increment: number,
	variants?: TailwindVariants[]
) =>
	tailwindPlugin(({ addUtilities }) => {
		if (!from || !to || !increment)
			throw new Error('You must specify "from", "to" and "increment" values');

		const POSITIONS = ['top', 'bottom', 'left', 'right'];

		const rules: Record<string, Object>[] = [];

		for (let i = from; i <= to; i += increment) {
			for (const position of POSITIONS) {
				const name = `.${position}-${String(i).replace('.', '_')}`;
				let style = {};
				style[position] = `${i}rem`;

				const rule = {};
				rule[name] = style;
				rules.push(rule);
			}
		}

		addUtilities(rules, variants);
	});

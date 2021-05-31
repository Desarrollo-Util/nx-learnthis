import tailwindPlugin from 'tailwindcss/plugin';
import type { TailwindVariants } from '../types/variants.type';

/**
 * A plugin that creates transition classes
 * @param minTime From value
 * @param maxTime To value
 * @param increment Increment between rules
 * @param variants Tailwind variants
 * @returns Tailwind plugin
 */
export const transitionPlugin = (
	minTime: number,
	maxTime: number,
	increment: number,
	variants?: TailwindVariants[]
) =>
	tailwindPlugin(({ addUtilities }) => {
		if (
			typeof minTime !== 'number' ||
			typeof maxTime !== 'number' ||
			typeof increment !== 'number'
		)
			throw new Error(
				'TransitionPlugin: You must specify "from", "to" and "increment" values'
			);

		const types = [
			['all', 'all'],
			['height', 'h'],
			['width', 'w'],
			['max-width', 'max-w'],
			['max-height', 'max-h'],
			['padding', 'p'],
			['margin', 'm'],
			['background-color', 'bg'],
		];

		const timingFunctions = [
			['linear', 'lin'],
			['ease', 'e'],
			['ease-in', 'ei'],
			['ease-out', 'eo'],
			['ease-in-out', 'eio'],
		];

		const rules: Record<string, Object>[] = [];

		for (let i = minTime; i <= maxTime; i += increment) {
			for (const type of types) {
				for (const timingFunction of timingFunctions) {
					const name = `.transition-${type[1]}-${timingFunction[1]}-${i}`;
					const style = {
						transition: `${type[0]} ${i}ms ${timingFunction[0]}`,
					};

					const rule = {};
					rule[name] = style;
					rules.push(rule);
				}
			}
		}

		addUtilities(rules, variants);
	});

import tailwindPlugin from 'tailwindcss/plugin';
import type { TailwindVariants } from '../types/variants.type';

/** Resolution breakpoints */
type BreakPoints = {
	/** XS pixel width */
	xs: number;
	/** SM pixel width */
	sm: number;
	/** MD pixel width */
	md: number;
	/** LG pixel width */
	lg: number;
};

/**
 * A plugin that creates four container classes
 *  - container-xs
 *  - container-sm
 *  - container-md
 *  - container-lg
 * @param breakpoints Breakpoint values
 * @param variants Tailwind variants
 * @returns Tailwind plugin
 */
export const containerPlugin = (
	breakpoints: BreakPoints,
	variants?: TailwindVariants[]
) =>
	tailwindPlugin(({ addUtilities }) => {
		const { xs, sm, md, lg } = breakpoints;

		if (
			typeof xs !== 'number' ||
			typeof sm !== 'number' ||
			typeof md !== 'number' ||
			typeof lg !== 'number'
		)
			throw new Error(
				'ContainerPlugin: All breakpoints "xs", "sm", "md" and "lg" must be provided'
			);

		if (
			!Number.isInteger(xs) ||
			!Number.isInteger(sm) ||
			!Number.isInteger(md) ||
			!Number.isInteger(lg)
		)
			throw new Error('All breakpoints must be integer');

		const rules: Record<string, Object>[] = [];

		for (const container of Object.entries(breakpoints)) {
			const name = `.container-${container[0]}`;
			const styles = {
				width: '100%',
				marginLeft: 'auto',
				marginRight: 'auto',
				maxWidth: container[1],
			};

			const rule = {};
			rule[name] = styles;
			rules.push(rule);
		}

		addUtilities(rules, variants);
	});

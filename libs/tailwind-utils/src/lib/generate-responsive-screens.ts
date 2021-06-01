/**
 * Generates screens property for a given breakpoints
 * @param xs XS max resolution in pixels
 * @param sm SM max resolution in pixels
 * @param md MD max resolution in pixels
 * @returns Screens property
 */
export const generateResponsiveScreens = (
	xs: number,
	sm: number,
	md: number
) => {
	if (
		typeof xs !== 'number' ||
		typeof sm !== 'number' ||
		typeof md !== 'number'
	)
		throw new Error(
			'generateResponsiveScreens: All breakpoints "xs", "sm" and "md" must be provided'
		);

	if (!Number.isInteger(xs) || !Number.isInteger(sm) || !Number.isInteger(md))
		throw new Error(
			'generateResponsiveScreens: All breakpoints must be integer'
		);

	return {
		xs: { max: `${xs}px` },
		sm: { min: `${xs + 1}px`, max: `${sm}px` },
		md: { min: `${sm + 1}px`, max: `${md}px` },
		lg: { min: `${md + 1}px` },
		xssm: { max: `${sm}px` },
		smmd: { min: `${xs + 1}px`, max: `${md}px` },
		mdlg: { min: `${sm + 1}px` },
	};
};

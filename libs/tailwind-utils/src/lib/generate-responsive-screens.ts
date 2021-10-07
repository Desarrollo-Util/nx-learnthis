/**
 * Generates screens property for a given breakpoints
 * @param xs XS max resolution in pixels
 * @param sm SM max resolution in pixels
 * @param md MD max resolution in pixels
 * @param lg LG max resolution in pixels
 * @returns Screens property
 */
export const generateResponsiveScreens = (
	xs: number,
	sm: number,
	md: number,
	lg: number
) => {
	if (
		typeof xs !== 'number' ||
		typeof sm !== 'number' ||
		typeof md !== 'number' ||
		typeof lg !== 'number'
	)
		throw new Error(
			'generateResponsiveScreens: All breakpoints "xs", "sm", "md" and "lg" must be provided'
		);

	if (!Number.isInteger(xs) || !Number.isInteger(sm) || !Number.isInteger(md))
		throw new Error(
			'generateResponsiveScreens: All breakpoints must be integer'
		);

	return {
		xs: { max: `${xs}px` },
		sm: { min: `${xs + 1}px`, max: `${sm}px` },
		md: { min: `${sm + 1}px`, max: `${md}px` },
		lg: { min: `${md + 1}px`, max: `${lg}px` },
		xl: { min: `${lg + 1}px` },
		xssm: { max: `${sm}px` },
		xsmd: { max: `${md}px` },
		xslg: { max: `${lg}px` },
		smmd: { min: `${xs + 1}px`, max: `${md}px` },
		smlg: { min: `${xs + 1}px`, max: `${lg}px` },
		smxl: { min: `${xs + 1}px` },
		mdlg: { min: `${sm + 1}px`, max: `${lg}px` },
		mdxl: { min: `${sm + 1}px` },
		lgxl: { min: `${md + 1}px` },
	};
};

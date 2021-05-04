import { VOFormatException } from '../../exceptions/vo-format.exception';

/**
 * Abstract class to represent an enum based value object
 */
export abstract class EnumValueObject<T> {
	/**
	 * Creates a new enum-based value object
	 * @param value Current value
	 * @param enumValues Allowed values
	 */
	constructor(public readonly value: T, public readonly enumValues: T[]) {
		if (!enumValues.includes(value)) throw new VOFormatException(value);
	}

	/**
	 * Checks if value object is equals to a given value object
	 * @param vo Value object to check
	 * @returns True if both are equals
	 */
	public equals(vo?: EnumValueObject<T>): boolean {
		if (vo.value !== this.value) return false;

		for (const possibleValue of vo.enumValues) {
			if (!this.enumValues.includes(possibleValue)) return false;
		}

		return true;
	}
}

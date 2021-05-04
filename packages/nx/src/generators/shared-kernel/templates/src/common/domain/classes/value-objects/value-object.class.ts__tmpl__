import { VOFormatException } from '../../exceptions/vo-format.exception';

/** Interface for value object props */
interface ValueObjectProps {
	/** Key-value */
	[index: string]: any;
}

/**
 * Abstract class to create a key-value-based value object
 */
export abstract class ValueObject<T extends ValueObjectProps> {
	/**
	 * Creates a new key-value value object, and freeze props to prevent them to be modified
	 * @param value Properties and values
	 */
	constructor(public readonly value: T) {
		if (value === null || value === undefined)
			throw new VOFormatException(value);
		this.value = Object.freeze(value);
	}

	/**
	 * Checks if value object is equals to a given value object
	 * @param vo Value object to check
	 * @returns True if both are equals
	 */
	public equals(vo?: ValueObject<T>): boolean {
		if (vo === null || vo === undefined || vo.value === undefined) {
			return false;
		}

		return JSON.stringify(this.value) === JSON.stringify(vo.value);
	}
}

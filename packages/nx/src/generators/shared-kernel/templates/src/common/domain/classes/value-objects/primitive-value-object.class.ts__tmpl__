import { VOFormatException } from '../../exceptions/vo-format.exception';

/** Primitive types */
type Primitive = number | string | boolean | symbol;

/**
 * Abstract class to represent a primitive value object
 */
export abstract class PrimitiveValueObject<T extends Primitive> {
	/**
	 * Creates a new primitive value object
	 * @param value Value
	 */
	constructor(public readonly value: T) {
		if (!this.validate(value)) throw new VOFormatException(value);
	}

	/**
	 * Method to validate if a given value is valid for this value object
	 * @param value
	 */
	protected abstract validate(value: T): boolean;

	/**
	 * Checks if value object is equals to a given value object
	 * @param vo Value object to check
	 * @returns True if both are equals
	 */
	public equals(vo?: PrimitiveValueObject<T>): boolean {
		return vo.value === this.value;
	}
}

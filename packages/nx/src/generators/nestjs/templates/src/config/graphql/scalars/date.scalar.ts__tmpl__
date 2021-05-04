import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

/**
 * GQL Scalar with its custom transform methods
 */
@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<string, Date> {
	/**
	 * @ignore
	 */
	description = 'Date custom scalar type';
	/**
	 * Transform string into Date
	 *
	 * @param  {string} value
	 * @returns Date
	 */
	parseValue(value: string): Date {
		return new Date(value); // value from the client
	}
	/**
	 * Transform Date to en-US string format
	 *
	 * @param  {Date} value
	 * @returns string
	 */
	serialize(value: Date): string {
		return value.toUTCString(); // value sent to the client
	}
	/**
	 * Filter incoming data for string
	 *
	 * @param  {ValueNode} ast
	 * @returns Date
	 */
	parseLiteral(ast: ValueNode): Date {
		if (ast.kind === Kind.STRING) {
			return new Date(ast.value);
		}
		return null;
	}
}

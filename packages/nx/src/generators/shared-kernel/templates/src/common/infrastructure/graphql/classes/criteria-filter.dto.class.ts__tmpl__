import { Type } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';

/** Output class type */
export type CriteriaFilterDtoClass<T extends string | number> = {
	/** Filter name */
	name: T;
	/** Filter value */
	value: string;
};

/**
 * Creates a graphql input type for a criteria filter based on a specific enum type
 * @param GraphqlEnum Graphql filter enum
 */
export default function CriteriaFilterDto<T extends string | number>(
	GraphqlEnum: Object
): Type<CriteriaFilterDtoClass<T>> {
	@InputType({ isAbstract: true })
	class _CriteriaFilterDto {
		@Field(() => GraphqlEnum)
		name: T;

		@Field()
		value: string;
	}

	return _CriteriaFilterDto;
}

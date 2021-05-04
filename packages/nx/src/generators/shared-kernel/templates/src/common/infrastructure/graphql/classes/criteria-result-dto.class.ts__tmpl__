import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

/** Output class type */
type CriteriaResultDtoClass<T extends Type<any>> = {
	/** Array of results */
	data: T[];
	/** Count of total elements that could be retrieved */
	total: number;
};

/**
 * Creates a graphql type for a criteria result based on a specific graphql type
 * @param GraphqlType Graphql type class
 */
export default function CriteriaResultDto<T extends Type<any>>(
	GraphqlType: T
): Type<CriteriaResultDtoClass<T>> {
	@ObjectType({ isAbstract: true })
	class _CriteriaDto<TItem> {
		@Field(() => [GraphqlType], { nullable: true })
		data!: TItem[];

		@Field(() => Int)
		total!: number;
	}

	return _CriteriaDto;
}

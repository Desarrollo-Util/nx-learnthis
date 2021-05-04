import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * GQL decorator for get auth user
 */
export const GetGqlAuthUser = createParamDecorator(
	(_, ctx: GqlExecutionContext): any =>
		GqlExecutionContext.create(ctx).getContext().req.user
);

/**
 * Rest decorator for get auth user
 */
export const GetRestAuthUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext): any => {
		const request = ctx.switchToHttp().getRequest();
		return request.user;
	}
);

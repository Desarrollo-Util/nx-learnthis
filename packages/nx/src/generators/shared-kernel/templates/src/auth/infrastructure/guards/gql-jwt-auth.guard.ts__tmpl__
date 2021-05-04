import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { BaseJwtAuthGuard } from './base-jwt-auth.guard';

/**
 * Graphql auth guard implementation
 */
export class GqlJwtAuthGuard extends BaseJwtAuthGuard {
	/**
	 * Gets HTTP request from execution context
	 * @param context Execution context
	 */
	getRequest(context: ExecutionContext): any {
		return GqlExecutionContext.create(context).getContext().req;
	}
}

import { ExecutionContext } from '@nestjs/common';
import { BaseJwtAuthGuard } from './base-jwt-auth.guard';

/**
 * REST auth guard implementation
 */
export class RestJwtAuthGuard extends BaseJwtAuthGuard {
	/**
	 * Gets HTTP request from execution context
	 * @param context Execution context
	 */
	getRequest(context: ExecutionContext): any {
		return context.switchToHttp().getRequest();
	}
}

import { VOCriteriaOperator } from '../../value-objects/criteria-operator.vo';
import { VOPositiveInt } from '../../value-objects/positive-int.vo';

/** Find by criteria type */
export type FindByCriteria<F, S> = {
	/** Filters */
	filters?: F[];
	/** Sort */
	sort?: S;
	/** Logic operator to join filters */
	operator?: VOCriteriaOperator;
	/** Number of elements to skip */
	skip?: VOPositiveInt;
	/** Number of element to retrieve */
	limit?: VOPositiveInt;
};

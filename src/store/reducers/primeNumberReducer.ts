import { PrimeNumberAction } from '../actions';
import { ActionTypePrimeNumber } from '../action-types';

interface PrimeNumberState {
	result: number | undefined;
	isPrime: boolean
};

const initialState = {
	result: undefined,
	isPrime: false
};

const primeNumberReducer = (
	state: PrimeNumberState = initialState,
	action: PrimeNumberAction
): PrimeNumberState => {
	switch (action.type) {
		case ActionTypePrimeNumber.CHECK_PRIME:
			return {
				result: undefined,
				isPrime: action.payload.isPrime
			};
		case ActionTypePrimeNumber.SUM_PRIME:
			return {
				result: action.payload.result,
				isPrime: action.payload.isPrime
			};
		default:
			return state;
	}
};

export default primeNumberReducer;

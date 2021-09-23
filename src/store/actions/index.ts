import {
	ActionTypeModal,
	ActionTypePrimeNumber
} from '../action-types';

export interface ModalAction {
	type: ActionTypeModal.IS_CLOSED | ActionTypeModal.IS_OPEN
};

interface PrimeNumberSumAction {
	type: ActionTypePrimeNumber.SUM_PRIME;
	payload: {
		result: number,
		isPrime: boolean
	}
};

interface PrimeNumberCheckAction {
	type: ActionTypePrimeNumber.CHECK_PRIME;
	payload: {
		result: undefined;
		isPrime: boolean;
	}
}

export type PrimeNumberAction = PrimeNumberSumAction | PrimeNumberCheckAction;

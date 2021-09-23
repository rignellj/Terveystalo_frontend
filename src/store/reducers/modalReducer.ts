import { ActionTypeModal } from '../action-types';
import { ModalAction } from '../actions';

interface ModalState {
	modalIsOpen: boolean;
}

const initialState = {
	modalIsOpen: false
}

const modalReducer = (
	state: ModalState = initialState,
	action: ModalAction
): ModalState => {
	switch (action.type) {
		case ActionTypeModal.IS_CLOSED:
			return { modalIsOpen: false };
		case ActionTypeModal.IS_OPEN:
			return { modalIsOpen: true };
		default:
			return state;
	}
};

export default modalReducer;

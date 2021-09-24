import React, { useReducer } from 'react';

interface InputState {
	value: string,
	isTouched: boolean
}

interface InputAction {
	type: string,
	payload: string
}


const inputStateReducer = (
	state: InputState,
	action: InputAction
): InputState => {
	switch (action.type) {
		case 'INPUT':
			return {
				value: action.payload,
				isTouched: state.isTouched
			};
		case 'BLUR':
			return {
				value: state.value,
				isTouched: true
			};
		case 'RESET':
			return {
				value: '',
				isTouched: false
			};
	}
	return state;
};

const useInput = (validateValue: (value: string) => boolean, initialState?: string) => {
	const [inputState, dispatch] = useReducer(inputStateReducer, {
		value: initialState || '',
		isTouched: false
	});

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
		dispatch({ type: 'INPUT', payload: event.target.value });
	};

	const inputBlurHandler = () => {
		dispatch({ type: 'BLUR', payload: '' });
	};

	const reset = () => {
		dispatch({ type: 'RESET', payload: '' });
	};

	return {
		value: inputState.value,
		hasError,
		reset,
		isValid: valueIsValid,
		valueChangeHandler,
		inputBlurHandler
	};

};

export default useInput;

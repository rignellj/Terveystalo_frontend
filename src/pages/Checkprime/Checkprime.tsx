import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

// import { CHECK_PRIME_ENDPOINT } from '../../utils/config';
import { ActionTypeModal, ActionTypePrimeNumber } from '../../store/action-types';
import { useHttpClient } from '../../hooks/useHttpRequest';
import useInput from '../../hooks/useInput';
import Form from '../../components/UI/Form/Form';
import InputField from '../../components/UI/Form/InputField';
import Button from '../../components/Button/Button';
import ErrorModal from '../../components/UI/Modal/ErrorModal';

const CheckPrime: React.FC = () => {
	const dispatch = useDispatch();
	const { sendRequest, error, clearError } = useHttpClient();
	const {
		value, hasError, reset, valueChangeHandler,
		inputBlurHandler, isValid
	} = useInput(value => /^\d+$/.test(value));

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		if (!isValid) return ;

		event.preventDefault();

		try {
			const response = await sendRequest(`${process.env.REACT_APP_API_CHECKPRIME}?number=${value}`);

			if (response?.data) {
				const { data: { isPrime } } = response;
				dispatch({ type: ActionTypePrimeNumber.CHECK_PRIME, payload: { isPrime } });
				dispatch({ type: ActionTypeModal.IS_OPEN })
				reset();
			}
		} catch (error) { }
	};

	return (
		<div className='center'>
			<ErrorModal errorMessage={error} closeModal={clearError} />
			<Form onSubmit={onSubmitHandler}>
				<InputField
					autoFocus
					type='input'
					label='Check Prime Number'
					value={value}
					handleChange={valueChangeHandler}
					handleBlur={inputBlurHandler}
					isValid={!hasError}
					errorMessage='Only digits are allowed.'
					inputClasses='input_width'
					placeholder='13'
				/>
				<Button type='submit' disabled={hasError}>
					Result
				</Button>
			</Form>
		</div>
	)
};

export default CheckPrime;

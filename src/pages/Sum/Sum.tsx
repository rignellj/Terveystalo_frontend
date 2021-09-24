import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { SUM_ENDPOINT } from '../../utils/config';
import { ActionTypeModal, ActionTypePrimeNumber } from '../../store/action-types';
import useInput from '../../hooks/useInput';
import { useHttpClient } from '../../hooks/useHttpRequest';
import Form from '../../components/UI/Form/Form';
import InputField from '../../components/UI/Form/InputField';
import Button from '../../components/Button/Button';
import ErrorModal from '../../components/UI/Modal/ErrorModal';

const Sum: React.FC = () => {
	const dispatch = useDispatch();
	const { sendRequest, error, clearError } = useHttpClient();
	const {
		value, hasError, reset, valueChangeHandler,
		inputBlurHandler, isValid
	} = useInput(value => /^(\d|,)+$/.test(value));

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		if (!isValid) return ;

		event.preventDefault();

		try {
			const response = await sendRequest(`${SUM_ENDPOINT}/?numbers=${value}`);

			if (response?.data) {
				const { data: { result, isPrime } } = response;
				dispatch({ type: ActionTypePrimeNumber.SUM_PRIME, payload: {
					result, isPrime
				}});
				dispatch({ type: ActionTypeModal.IS_OPEN });
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
					type='textarea'
					textarea
					label='Prime Number of Sum'
					value={value}
					handleChange={valueChangeHandler}
					isValid={!hasError}
					handleBlur={inputBlurHandler}
					errorMessage='Only digits 0-9 and "," are allowed.'
					inputClasses='input_width'
					placeholder='9,1,3'
				/>
				<Button type='submit' disabled={hasError}>
					Result
				</Button>
			</Form>
		</div>
	);
};

export default Sum;

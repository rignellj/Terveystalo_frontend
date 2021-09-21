import React, { FormEvent } from 'react';

import { SUM } from '../../utils/config';
import useInput from '../../hooks/useInput';
import { useHttpClient } from '../../hooks/useHttpRequest';
import Form from '../../components/UI/Form';
import InputField from '../../components/UI/InputField';
import Button from '../../components/Button/Button';

const Sum: React.FC = () => {
	const { sendRequest } = useHttpClient();
	const {
		value,
		hasError,
		reset,
		valueChangeHandler,
		inputBlurHandler
	} = useInput(value => /^(\d|,)+$/.test(value));

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await sendRequest(`${SUM}/?numbers=${value}`);
			console.log(response);
		} catch (error) { }
		reset();
	};

	return (
		<div className='center'>
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
	)
};

export default Sum;
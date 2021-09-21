import React, { FormEvent } from 'react';

import { CHECKPRIME } from '../../utils/config';
import { useHttpClient } from '../../hooks/useHttpRequest';
import useInput from '../../hooks/useInput';
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
	} = useInput(value => /^\d+$/.test(value));

	const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const response = await sendRequest(`${CHECKPRIME}/?number=${value}`);
		console.log(response);
		reset();
	};

	return (
		<div className='center'>
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

export default Sum;
import { render, screen } from '../utils/test.utils';

import InputField from '../components/UI/Form/InputField';

describe('Input field component', () => {
	it('should render email input field', () => {
		const inputHandler = (event:
			React.ChangeEvent<HTMLInputElement> |
			React.ChangeEvent<HTMLTextAreaElement>
		) => event.preventDefault();

		render(
			<InputField
				label='email'
				type='email'
				value=''
				handleChange={inputHandler}
			/>
		);
		const inputElement = screen.getByText('email');
		expect(inputElement).toBeInTheDocument();
	});
	it('should render textarea field', () => {
		const inputHandler = (event:
			React.ChangeEvent<HTMLInputElement> |
			React.ChangeEvent<HTMLTextAreaElement>
		) => event.preventDefault();

		render(
			<InputField
				label='email'
				type='email'
				value=''
				textarea
				handleChange={inputHandler}
			/>
		);
		const textareaElement = screen.getAllByRole('textbox');
		expect(textareaElement).toHaveLength(1);
	});
	it('should render error message', () => {
		const inputHandler = (event:
			React.ChangeEvent<HTMLInputElement> |
			React.ChangeEvent<HTMLTextAreaElement>
		) => event.preventDefault();

		render(
			<InputField
				label='email'
				type='email'
				value=''
				textarea
				errorMessage='This is error message'
				isValid={false}
				handleChange={inputHandler}
			/>
		);
		const errorMessageElement = screen.getByText('This is error message');
		expect(errorMessageElement).toBeInTheDocument();
	});
});

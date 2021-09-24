import { render, screen } from '../utils/test.utils';

import Form from '../components/UI/Form/Form';

describe('Form component', () => {
	it('should render form wrapper', () => {
		const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => event.preventDefault();

		render(<Form onSubmit={onSubmit}>children inside the form</Form>);

		const FormElement = screen.getByText('children inside the form');
		expect(FormElement).toBeInTheDocument();
	});
});

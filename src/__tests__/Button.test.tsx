import { render, screen } from '../utils/test.utils';

import Button from '../components/Button/Button';

describe('Button component', () => {
	it('should render button with "test text"', () => {
		render(<Button>test text</Button>);
		const buttonElement = screen.getByText('test text');
		expect(buttonElement).toBeInTheDocument();
	});
});

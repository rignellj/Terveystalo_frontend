import { render, screen } from '../utils/test.utils';

import NavBar from '../components/NavBar/NavBar';

describe('Navigation bar component', () => {
	it('should render "Home", "Check Prime Number" and "Sum" as nav items', () => {
		render(<NavBar />);

		const homeElement = screen.getByText('Home');
		const checkPrimeNumberElement = screen.getByText('Check Prime Number');
		const sumElement = screen.getByText('Sum');
	
		expect(homeElement).toBeInTheDocument();
		expect(checkPrimeNumberElement).toBeInTheDocument();
		expect(sumElement).toBeInTheDocument();
	});
});

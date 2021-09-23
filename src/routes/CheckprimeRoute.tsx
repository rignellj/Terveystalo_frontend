import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import { useTypedSelector } from '../hooks/useTypedSelector';

import CheckPrime from '../pages/CheckPrime/CheckPrime';
import { ActionTypeModal } from '../store/action-types';

const CheckPrimeRoute: React.FC = () => {
	const { modalIsOpen } = useTypedSelector(state => state.modal);
	const { isPrime } = useTypedSelector(state => state.primeNumber);
	let isPrimeText = 'Number is prime number';

	if (!isPrime) {
		isPrimeText = 'Number is not prime number';
	}

	return (
		<React.Fragment>
			<Modal closeButton closeModal={ActionTypeModal.IS_CLOSED} modalIsOpen={modalIsOpen} header='Result'>
				<p>{isPrimeText}</p>
			</Modal>
			<CheckPrime />
		</React.Fragment>
	)
};

export default CheckPrimeRoute;

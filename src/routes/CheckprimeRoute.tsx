import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { ActionTypeModal } from '../store/action-types';
import CheckPrime from '../pages/CheckPrime/CheckPrime';
import Modal from '../components/UI/Modal/Modal';

import styles from './Prime.module.css';

const CheckPrimeRoute: React.FC = () => {
	const { modalIsOpen } = useTypedSelector(state => state.modal);
	const { isPrime } = useTypedSelector(state => state.primeNumber);
	let isPrimeText = 'Number is prime number';
	let classes = styles.isPrime;
	
	if (!isPrime) {
		isPrimeText = 'Number is not prime number';
		classes = styles.notPrime;
	}

	return (
		<React.Fragment>
			<Modal closeButton closeModal={ActionTypeModal.IS_CLOSED} modalIsOpen={modalIsOpen} header='Result'>
				<p className={classes}>{isPrimeText}</p>
			</Modal>
			<CheckPrime />
		</React.Fragment>
	)
};

export default CheckPrimeRoute;

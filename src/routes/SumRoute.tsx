import React from 'react';

import { ActionTypeModal } from '../store/action-types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Modal from '../components/UI/Modal/Modal';
import Sum from '../pages/Sum/Sum';

import styles from './Prime.module.css';

const SumRoute: React.FC = () => {
	const { modalIsOpen } = useTypedSelector(state => state.modal);
	const { result, isPrime } = useTypedSelector(state => state.primeNumber);
	let isPrimeText = 'is prime number';
	let classes = styles.isPrime;

	if (!isPrime) {
		isPrimeText = 'is not prime number';
		classes = styles.notPrime;
	}

	return (
		<React.Fragment>
			<Modal closeButton closeModal={ActionTypeModal.IS_CLOSED} modalIsOpen={modalIsOpen} header='Result'>
				<p className={classes}>Sum of numbers: {result}, number {isPrimeText}</p>
			</Modal>
			<Sum />
		</React.Fragment>
	)
};

export default SumRoute;

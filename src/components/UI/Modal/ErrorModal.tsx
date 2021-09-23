import React from 'react';

import Button from '../../Button/Button';
import Modal from './Modal';

interface IProps {
	errorMessage: string | null;
	closeModal: () => void;
};

const ErrorModal: React.FC<IProps> = ({ errorMessage, closeModal }) => {
	const footer = (
		<Button
			onClick={() => closeModal() }
		>
			Okay
		</Button>
	);

	return (
		<Modal
			modalIsOpen={!!errorMessage}
			header='An error Occured'
			closeModal={closeModal}
			footer={footer}
		>
			<p>{errorMessage}</p>
		</Modal>
	);
};

export default ErrorModal;

import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { ActionTypeModal } from '../../../store/action-types';
import Button from '../../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

import styles from './Modal.module.css';

interface IProps {
	closeModal: string | (() => void);
	modalIsOpen: boolean;
	className?: string;
	header?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
	footer?: ReactNode;
	closeButton?: boolean;
	closeButtonText?: string;
}

const Modal: React.FC<IProps> = ({
	closeModal, modalIsOpen, className, header, headerClass, children,
	contentClass, footerClass, footer, closeButton, closeButtonText
}) => {
	const dispatch = useDispatch();
	const closeButtonElement = (
		<Button onClick={() => dispatch({ type: ActionTypeModal.IS_CLOSED })}>
			{closeButtonText ? closeButtonText : 'Ok'}
		</Button>
	);

	if (!modalIsOpen) {
		return null;
	}

	return (
		<React.Fragment>
			<Backdrop closeBackdrop={closeModal} />
			<div className={`${styles.modal} ${className}`}>
				<header className={`${styles.modal_header} ${headerClass}`}>
					<h2>{header}</h2>
				</header>
				<div className={`${styles.modal_content} ${contentClass}`}>
					{children}
				</div>
				<footer className={`${styles.modal_footer} ${footerClass}`}>
					{closeButton ? closeButtonElement : footer}
				</footer>
			</div>
		</React.Fragment>
	);
}

export default Modal;

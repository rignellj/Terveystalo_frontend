import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import styles from './Backdrop.module.css';

interface IProps {
	closeBackdrop: (() => void) | string;
	className?: string;
};

const Backdrop: React.FC<IProps> = ({ closeBackdrop, className }) => {
	const dispatch = useDispatch();

	const closeBackdropHandler = () => {
		if (typeof closeBackdrop === 'string') {
			dispatch({ type: closeBackdrop });
		} else {
			closeBackdrop();
		}
	};
	return ReactDOM.createPortal(
		<div
			className={`${styles.backdrop} ${className}`}
			onClick={closeBackdropHandler}
		>
		</div>,
		document.getElementById('backdrop-hook')!)
};

export default Backdrop;

import React, { ReactElement } from 'react';

import styles from './Form.module.css';

interface IProps {
	label: string | ReactElement;
	type: string;
	name?: string;
	value: string;
	inputClasses?: string;
	errorMessage?: string;
	isValid?: boolean;
	textarea?: boolean;
	autoFocus?: boolean;
	placeholder?: string;
	className?: string;
	handleChange: (event:
		React.ChangeEvent<HTMLInputElement> |
		React.ChangeEvent<HTMLTextAreaElement>
	) => void;
	handleBlur?: () => void;
}

const InputField: React.FC<IProps> = ({
	label, type, name, errorMessage, inputClasses,
	isValid, value, textarea, className,
	handleChange, handleBlur, placeholder, autoFocus
}) => {
	if (textarea) {
		return (
			<div className={`${styles.form_control} ${inputClasses}`}>
				<label htmlFor={name}>{label}</label>
				<div className={className}>
					<textarea
						autoFocus={autoFocus}
						rows={6}
						className={`${styles.textarea}`}
						onBlur={handleBlur}
						name={name}
						onChange={handleChange}
						value={value}
						placeholder={placeholder}
					/>
				</div>
				{errorMessage && !isValid && (
					<p className={styles.error_text}>{errorMessage}</p>
				)}
			</div>
		);
	}
	return (
		<div className={`${styles.form_control} ${inputClasses}`}>
			<label>{label}</label>
			<div className={className}>
				<input
					autoFocus={autoFocus}
					className={`${styles.textarea}`}
					onBlur={handleBlur}
					name={name}
					onChange={handleChange}
					type={type}
					value={value}
					placeholder={placeholder}
				/>
			</div>
			{errorMessage && !isValid && (
				<p className={styles.error_text}>{errorMessage}</p>
			)}
		</div>
	);
};

export default InputField;

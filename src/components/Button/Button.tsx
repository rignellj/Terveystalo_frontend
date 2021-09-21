import React from 'react';
import classes from './Button.module.css';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined,
  className?: String,
  onClick?: (() => {} | Window | null | void),
  disabled?: boolean | undefined,
  children?: React.ReactNode
}

const Button = ({
  type,
  className,
  onClick,
  disabled,
  children
}: IProps) => {
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

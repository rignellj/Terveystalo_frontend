import React from 'react';

interface IProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Form: React.FC<IProps> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;

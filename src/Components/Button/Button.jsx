import React from 'react';

const Button = ({ text, onClick, className, disabled, type }) => {
    return (
        <button className={className} disabled={disabled} type={type} onClick={onClick}>
            {text}
        </button>
    );
};



export default Button;
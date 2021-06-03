import React from 'react';
import { buttonReset } from './ButtonReset.module.css';

const ButtonReset = ({ onClick, title }) => {
    return (
        <button type="button" onClick={onClick} className={buttonReset}>
            {title}
        </button>
    );
};

export default ButtonReset;

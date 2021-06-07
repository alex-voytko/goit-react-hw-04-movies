import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, title, type, className }) => {
    return (
        <>
            <button type={type} onClick={onClick} className={className}>
                {title}
            </button>
        </>
    );
};
Button.defaultProps = {
    title: '',
    onClick: null,
    className: '',
};
Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
};
export default Button;

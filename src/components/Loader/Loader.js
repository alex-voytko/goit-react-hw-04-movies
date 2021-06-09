import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { loader } from './Loader.module.css';

const Spinner = ({ size }) => {
    return (
        <div className={loader}>
            <Loader type="Oval" color="#FFFFFF" height={size} width={size} />
        </div>
    );
};

Spinner.propTypes = {
    size: PropTypes.string.isRequired,
};

export default Spinner;

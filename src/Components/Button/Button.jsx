import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({styleClass, value}) => (
    <button
        className = {styleClass} >
        {value} 
        </button>
);

Button.propTypes = {
    styleClass: PropTypes.string,
    value: PropTypes.string,
};

Button.defaultProps = {
    styleClass: 'btn-default'
};

export default Button;
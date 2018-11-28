import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    className,
    label,
    type,
    name,
    id,
    placeholder,
    onChange
}) => (
    <div className={className}>
        {label ? <label className="input__label" htmlFor={id}>{label}</label> : null}
        <input
            type = {type || 'text'}
            name = {name}
            id = {id}
            placeholder = {placeholder}
            className="input input__field"
            onChange={(e) => onChange(id, { value: e.target.value, label})}
        />
    </div>
);

Input.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

export default Input;
import React from 'react';
import './Input.scss';

const Input = ({ type, name, title, placeholder, value, handleChange }) => {

  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        className="form-input"
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input;
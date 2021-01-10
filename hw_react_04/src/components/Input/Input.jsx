import React from 'react';
import './Input.scss';

const Input = ({ type, name, placeholder, value, onChange }) => {

  const handleChange = (e) => {
    onChange && onChange(e.target.value)
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
}

export default Input;
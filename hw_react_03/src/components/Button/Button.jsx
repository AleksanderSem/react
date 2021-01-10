import React from 'react';
import './Button.scss';

const Input = ({ type, buttonName }) => {
  return (
    <button className="btn" type={type}>{buttonName}</button>
  )
}

export default Input;
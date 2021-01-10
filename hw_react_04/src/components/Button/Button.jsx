import React from 'react';
import './Button.scss';

const Input = ({ type, buttonName, onClick }) => {

  const handleClick = () => {
    onClick && onClick();
  }

  return (
    <button className="btn" type={type} onClick={handleClick}>{buttonName}</button>
  )
}

export default Input;
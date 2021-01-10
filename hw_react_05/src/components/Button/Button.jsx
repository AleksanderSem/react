import React from 'react';
import './Button.scss';

const Input = ({ type, title, onClick }) => {

  const handleClick = (e) => {
    e.preventDefault();
    onClick && onClick();
  }

  return (
    <button className="btn" type={type} onClick={handleClick}>{title}</button>
  )
}

export default Input;
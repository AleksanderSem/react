import React from 'react';
import './Button.scss';

const Input = ({handleReset}) => {
  return (
    <button className="btn" onClick={handleReset}>Reset</button>
  )
}

export default Input;
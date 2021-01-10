import React from 'react';
import './Input.scss';

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={(e) => { props.handleSerch(e.target.value) }}
    />
  )
}

export default Input;
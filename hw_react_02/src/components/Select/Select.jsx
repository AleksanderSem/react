import React from 'react';
import './Select.scss';

const Input = ({ name, handleSort }) => {
  return (
    <select name={name} onChange={(e) => handleSort(e.target.value)}>
      <option value="default">по релевантности</option>
      <option value="asc">по возростанию</option>
      <option value="desc">по убыванию</option>
    </select>
  )
}

export default Input;
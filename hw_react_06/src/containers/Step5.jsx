import React, { useState } from 'react';
import store from '../store/store';

const Step5 = () => {
  const {
    userInfo: {
      name,
      surname,
      email
    },
    userAddress: {
      country,
      city,
      street,
      houseNumber
    },
    userAvatar: {
      avatarUrl
    }
  } = store.getState()
  return (
    <>
      <h3 className="step-header">Спасибо за регистрацию!!!</h3>
      {avatarUrl && <div>
        <img height="100" src={avatarUrl} alt="avatar" />
      </div>}
      <h4>First name: {name}</h4>
      <h4>Last name: {surname}</h4>
      <p>Email: {email}</p>
      <p>Address: {`${country}, ${city}, ${street} ${houseNumber}`}</p>
    </>
  )
}

export default Step5;
import React, { useContext } from 'react';
import { Context } from '../App';
import Wrapper from '../components/Wrapper';

const StepFour = () => {
  const { state } = useContext(Context);
  const { name, surname, email, country, city, street, houseNumber, avatarUrl } = state.user

  return (
    <Wrapper>
      <h3 className="step-header">Спасибо за регистрацию!!!</h3>
      {avatarUrl && <div>
        <img height="100" src={avatarUrl} alt="avatar" />
      </div>}
      <h4>First name: {name}</h4>
      <h5>Last name: {surname}</h5>
      <p>Email: {email}</p>
      <p>Address: {`${country}, ${city}, ${street} ${houseNumber}`}</p>
    </Wrapper>
  )
}

export default StepFour;

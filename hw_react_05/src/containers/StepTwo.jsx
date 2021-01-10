import React, { useState, useContext } from 'react';
import { Context } from '../App';
import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import Button from '../components/Button';

const StepTwo = () => {
  const { state, dispatch } = useContext(Context);

  const [country, setCountry] = useState(state.user.country || '');
  const [city, setCity] = useState(state.user.city || '');
  const [street, setStreet] = useState(state.user.street || '');
  const [houseNumber, setHouseNumber] = useState(state.user.houseNumber || '');

  const handleNext = () => {
    if (country && city && street && houseNumber) {
      dispatch({
        type: "NEXT",
        payload: {
          ...state.user,
          country,
          city,
          street,
          houseNumber
        }
      })
    } else {
      alert("Enter all fields")
    }
  }

  const handlePrev = () => {
    dispatch({
      type: "PREVIOUS"
    })
  }

  return (
    <Wrapper>
      <h3 className="step-header">Enter your address information</h3>
      <form>
        <Input
          type={'text'}
          name={'country'}
          placeholder={'Enter country...'}
          value={country}
          handleChange={(e) => setCountry(e.target.value)}
        />
        <Input
          type={'text'}
          name={'city'}
          placeholder={'Enter city...'}
          value={city}
          handleChange={(e) => setCity(e.target.value)}
        />
        <Input
          type={'text'}
          name={'street'}
          placeholder={'Enter street...'}
          value={street}
          handleChange={(e) => setStreet(e.target.value)}
        />
        <Input
          type={'text'}
          name={'houseNumber'}
          placeholder={'Enter house number...'}
          value={houseNumber}
          handleChange={(e) => setHouseNumber(e.target.value)}
        />
        <Button type={'button'} title='Back' onClick={handlePrev} />
        <Button type={'button'} title='Next' onClick={handleNext} />
      </form>
    </Wrapper>
  )
}

export default StepTwo;

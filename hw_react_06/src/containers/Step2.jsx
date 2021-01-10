import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAddressInfo } from '../store/step2/actions';
import { userAdressStateSelector } from '../store/step2/selectors';
import { nextStep, prevStep } from '../store/step/actions';
import Input from '../components/Input';
import Button from '../components/Button';

const Step2 = () => {
  const state = useSelector(userAdressStateSelector);
  const dispatch = useDispatch()

  const [country, setCountry] = useState(state.country || '');
  const [city, setCity] = useState(state.city || '');
  const [street, setStreet] = useState(state.street || '');
  const [houseNumber, setHouseNumber] = useState(state.houseNumber || '');

  const [countryErr, setCountryErr] = useState('');
  const [cityErr, setCityErr] = useState('');
  const [streetErr, setStreetErr] = useState('');
  const [houseNumberErr, setHouseNumberErr] = useState('');

  const handleSubmit = () => {
    const isValid = formValidation()
    if (isValid) {
      dispatch(addUserAddressInfo(country, city, street, houseNumber))
      dispatch(nextStep())
    }
  }

  const formValidation = () => {
    let countryErr, cityErr, streetErr, houseNumberErr = '';
    let isValid = true;
    let regexp = /^[a-zA-Zа-яёА-ЯЁ]+$/;
    let regexp2 = /^[a-zA-Zа-яёА-ЯЁ0-9]+$/;

    const error = 'Invalid field';

    if (!regexp.test(country)) {
      countryErr = error;
      isValid = false;
    }

    if (!regexp.test(city)) {
      cityErr = error;
      isValid = false;
    }

    if (!regexp.test(street)) {
      streetErr = error;
      isValid = false;
    }

    if (!regexp2.test(houseNumber)) {
      houseNumberErr = error;
      isValid = false;
    }

    setCountryErr(countryErr)
    setCityErr(cityErr)
    setStreetErr(streetErr)
    setHouseNumberErr(houseNumberErr)
    return isValid;
  }


  return (
    <>
      <h3 className="step-header">Enter your address information</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          name={'country'}
          placeholder={'Enter country...'}
          value={country}
          handleChange={(e) => setCountry(e.target.value)}
        />
        {countryErr && <div style={{ color: "red" }}>{countryErr}</div>}

        <Input
          type={'text'}
          name={'city'}
          placeholder={'Enter city...'}
          value={city}
          handleChange={(e) => setCity(e.target.value)}
        />
        {cityErr && <div style={{ color: "red" }}>{cityErr}</div>}

        <Input
          type={'text'}
          name={'street'}
          placeholder={'Enter street...'}
          value={street}
          handleChange={(e) => setStreet(e.target.value)}
        />
        {streetErr && <div style={{ color: "red" }}>{streetErr}</div>}

        <Input
          type={'text'}
          name={'houseNumber'}
          placeholder={'Enter house number...'}
          value={houseNumber}
          handleChange={(e) => setHouseNumber(e.target.value)}
        />
        {houseNumberErr && <div style={{ color: "red" }}>{houseNumberErr}</div>}

        <Button type={'button'} title='Back' onClick={() => dispatch(prevStep())} />
        <Button type={'submit'} title='Next' onClick={handleSubmit} />
      </form>
    </>
  )
}

export default Step2;
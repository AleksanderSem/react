import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserPersonalInfo } from '../store/step1/actions';
import { userStateSelector } from '../store/step1/selectors';
import { nextStep } from '../store/step/actions';
import Input from '../components/Input';
import Button from '../components/Button';

const Step1 = () => {
  const state = useSelector(userStateSelector);
  const dispatch = useDispatch()

  const [name, setName] = useState(state.name || '');
  const [surname, setSurName] = useState(state.surname || '');
  const [email, setEmail] = useState(state.email || '');

  const [nameErr, setNameErr] = useState('');
  const [surnameErr, setSurNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const handleSubmit = () => {
    const isValid = formValidation()
    if (isValid) {
      dispatch(addUserPersonalInfo(name, surname, email))
      dispatch(nextStep())
    }
  }

  const formValidation = () => {
    let nameErr, surnameErr, emailErr = '';
    let isValid = true;
    let regexp = /^[a-zA-Zа-яёА-ЯЁ]{2,16}$/;
    let regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if (!regexp.test(name)) {
      nameErr = 'Invalid field';
      isValid = false;
    }

    if (!regexp.test(surname)) {
      surnameErr = 'Invalid field';
      isValid = false;
    }

    if (!regexpEmail.test(email)) {
      emailErr = 'Invalid field';
      isValid = false;
    }

    setNameErr(nameErr)
    setSurNameErr(surnameErr)
    setEmailErr(emailErr)
    return isValid;
  }

  return (
    <>
      <h3 className="step-header">Enter your personal information</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Enter name...'}
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        {nameErr && <div style={{ color: "red" }}>{nameErr}</div>}

        <Input
          type={'text'}
          name={'surname'}
          placeholder={'Enter surname...'}
          value={surname}
          handleChange={(e) => setSurName(e.target.value)}
        />
        {surnameErr && <div style={{ color: "red" }}>{surnameErr}</div>}

        <Input
          type={'email'}
          name={'email'}
          placeholder={'Enter email...'}
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        {emailErr && <div style={{ color: "red" }}>{emailErr}</div>}

        <Button type={'submit'} title='Next' onClick={handleSubmit} />
      </form>
    </>
  )
}

export default Step1;

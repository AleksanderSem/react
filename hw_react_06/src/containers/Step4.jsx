import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserPassword } from '../store/step4/actions';
import { getUserPassword } from '../store/step4/selectors';
import { nextStep, prevStep } from '../store/step/actions';
import Input from '../components/Input';
import Button from '../components/Button';

const Step4 = () => {
  const state = useSelector(getUserPassword);
  const dispatch = useDispatch()

  const [password, setPassword] = useState(state.password || '')
  const [confirmPassword, setConfirmPassword] = useState(state.password || '')

  const [passwordErr, setPasswordErr] = useState('');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('');

  const handleSubmit = () => {
    const isValid = formValidation()
    if (isValid) {
      if (password === confirmPassword) {
        dispatch(addUserPassword(password))
        dispatch(nextStep())
      }
      else {
        alert('Passwords are different')
      }
    }
  }

  const formValidation = () => {
    let passwordErr, confirmPasswordErr = '';
    let isValid = true;
    let regexp = /^[a-zA-Zа-яёА-ЯЁ0-9]{8,16}$/;

    const error = 'Invalid field';

    if (!regexp.test(password)) {
      passwordErr = error;
      isValid = false;
    }

    if (!regexp.test(confirmPassword)) {
      confirmPasswordErr = error;
      isValid = false;
    }

    setPasswordErr(passwordErr)
    setConfirmPasswordErr(confirmPasswordErr)
    return isValid;
  }

  return (
    <>
      <h3 className="step-header">Enter your password</h3>
      <form>
        <Input
          type={'password'}
          name={'password'}
          value={password}
          placeholder={'Enter password...'}
          handleChange={(e) => setPassword(e.target.value)}
        />
        {passwordErr && <div style={{ color: "red" }}>{passwordErr}</div>}

        <Input
          type={'password'}
          name={'repeatPassword'}
          value={confirmPassword}
          placeholder={'Confirm password...'}
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordErr && <div style={{ color: "red" }}>{confirmPasswordErr}</div>}

        <Button type={'button'} title='Back' onClick={() => dispatch(prevStep())} />
        <Button type={'submit'} title='Отправить' onClick={handleSubmit} />
      </form>
    </>
  )
}

export default Step4;
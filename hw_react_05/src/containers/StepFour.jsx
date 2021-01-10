import React, { useState, useContext } from 'react';
import { Context } from '../App';
import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import Button from '../components/Button';

const StepFour = () => {
  const { state, dispatch } = useContext(Context);
  const [password, setPassword] = useState(state.user.password || '')
  const [confirmPassword, setConfirmPassword] = useState(state.user.password || '')

  const handleNext = () => {
    if (password && password === confirmPassword) {
      dispatch({
        type: "NEXT",
        payload: {
          ...state.user,
          password
        }
      })
    } else {
      alert('Passwords are different')
    }
  }

  const handlePrev = () => {
    dispatch({
      type: "PREVIOUS"
    })
  }

  return (
    <Wrapper>
      <h3 className="step-header">Enter your password</h3>
      <form>
        <Input
          type={'password'}
          name={'password'}
          value={password}
          placeholder={'Enter password...'}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type={'password'}
          name={'repeatPassword'}
          value={confirmPassword}
          placeholder={'Confirm password...'}
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type={'button'} title='Back' onClick={handlePrev} />
        <Button type={'button'} title='Отправить' onClick={handleNext} />
      </form>
    </Wrapper>
  )
}

export default StepFour;

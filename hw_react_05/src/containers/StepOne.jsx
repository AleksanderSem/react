import React, { useState, useContext } from 'react';
import { Context } from '../App';
import Wrapper from '../components/Wrapper';
import Input from '../components/Input';
import Button from '../components/Button';

const StepOne = () => {
  const { state, dispatch } = useContext(Context);
  const [name, setName] = useState(state.user.name || '');
  const [surname, setSurName] = useState(state.user.surname || '');
  const [email, setEmail] = useState(state.user.email || '');

  const handleNext = () => {
    if (name && surname && email) {
      dispatch({
        type: "NEXT",
        payload: {
          ...state.user,
          name,
          surname,
          email
        }
      })
    } else {
      alert("Enter all fields")
    }

  }

  return (
    <Wrapper>
      <h3 className="step-header">Enter your personal information</h3>
      <form>
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Enter name...'}
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <Input
          type={'text'}
          name={'surname'}
          placeholder={'Enter surname...'}
          value={surname}
          handleChange={(e) => setSurName(e.target.value)}
        />
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Enter email...'}
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Button type={'button'} title='Next' onClick={handleNext} />
      </form>
    </Wrapper>
  )
}

export default StepOne;

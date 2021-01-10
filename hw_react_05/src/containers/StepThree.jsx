import React, { useState, useContext } from 'react';
import { Context } from '../App';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';
import Input from '../components/Input';

const StepThree = () => {
  const { state, dispatch } = useContext(Context);
  const [avatarUrl, setAvatarUrl] = useState(state.user.avatarUrl || '');

  const handleNext = () => {
    dispatch({
      type: "NEXT",
      payload: {
        ...state.user,
        avatarUrl,
      }
    })
  }

  const handlePrev = () => {
    dispatch({
      type: "PREVIOUS"
    })
  }

  const handleAvatarChange = (e) => {

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setAvatarUrl(reader.result);
    }

    reader.readAsDataURL(file)
  }

  return (
    <Wrapper>
      <h3 className="step-header">Set your avatar</h3>
      <form>
        <Input
          type={'file'}
          handleChange={handleAvatarChange}
        />
        {avatarUrl && <div><img src={avatarUrl} height="100" alt="Image preview..." /></div>}
        <Button type={'button'} title='Back' onClick={handlePrev} />
        <Button type={'button'} title='Next' onClick={handleNext} />
      </form>
    </Wrapper>
  )
}

export default StepThree;

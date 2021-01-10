import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAvatar } from '../store/step3/actions';
import { avatarStateSelector } from '../store/step3/selectors';
import { nextStep, prevStep } from '../store/step/actions';
import Input from '../components/Input';
import Button from '../components/Button';

const Step3 = () => {
  const state = useSelector(avatarStateSelector);
  const dispatch = useDispatch()

  const [avatarUrl, setAvatarUrl] = useState(state.avatarUrl || '');

  const handleSubmit = () => {
    dispatch(addUserAvatar(avatarUrl))
    dispatch(nextStep())
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
    <>
      <h3 className="step-header">Set your avatar</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type={'file'}
          handleChange={handleAvatarChange}
        />
        {avatarUrl && <div><img src={avatarUrl} height="100" alt="preview..." /></div>}

        <Button type={'button'} title='Back' onClick={() => dispatch(prevStep())} />
        <Button type={'submit'} title='Next' onClick={handleSubmit} />
      </form>
    </>
  )
}

export default Step3;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/themes/actions';
import { themeStateSelector } from '../store/themes/selectors'
import Button from '../components/Button';

const ChangeTheme = () => {
  const state = useSelector(themeStateSelector);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(changeTheme())
  }

  return (
    <Button onClick={handleChangeTheme} title={state.type === 'light' ? 'dark' : 'light'} />
  )
}

export default ChangeTheme;
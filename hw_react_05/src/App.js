import React, { useReducer } from 'react';
import Wrapper from './components/Wrapper';
import StepOne from './containers/StepOne';
import StepTwo from './containers/StepTwo';
import StepThree from './containers/StepThree';
import StepFour from './containers/StepFour';
import StepFive from './containers/StepFive';
import './App.scss';
import Button from './components/Button';

const themes = {
  light: {
    background: '#EAEAEA',
    color: '#393b44',
  },

  dark: {
    background: '#393b44',
    color: '#EAEAEA',
  }
}

const initialState = {
  step: 1,
  user: {},
  theme: {
    type: 'light',
    themes
  }
}

export const Context = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      if (state.step >= 5) {
        return { ...state, step: 5 }
      }
      return {
        ...state,
        step: state.step + 1,
        user: action.payload
      }
    case 'PREVIOUS':
      if (state.step < 2) {
        return { ...state, step: 1 }
      }
      return {
        ...state,
        step: state.step - 1
      }
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: {
          ...state.theme,
          type: state.theme.type === 'light' ? 'dark' : 'light'
        }
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeTheme = () => {
    dispatch({
      type: 'CHANGE_THEME',
    })
  }

  return (
    <div className="wrapper">
      <Context.Provider value={{ state, dispatch }}>
        <Button onClick={handleChangeTheme} title={state.theme.type === 'light' ? 'dark' : 'light'} />     
        <Wrapper>
          <h1 className="step">Step {state.step} of 5</h1>
        </Wrapper>
        {state.step === 1 && <StepOne />}
        {state.step === 2 && <StepTwo />}
        {state.step === 3 && <StepThree />}
        {state.step === 4 && <StepFour />}
        {state.step === 5 && <StepFive />}
      </Context.Provider>
    </div>
  );
}

export default App;

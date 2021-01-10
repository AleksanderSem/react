import ActionTypes from './actionTypes';

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
  type: 'light',
  themes
}

const changeThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return {
        ...state,
        type: state.type === 'light' ? 'dark' : 'light'
      }
    default:
      return state;
  }
}

export default changeThemeReducer;
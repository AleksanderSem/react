import ActionTypes from './actionTypes';

const stepFourReducer = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER_PASSWORD:
      return state = action.payload
    default:
      return state;
  }
}

export default stepFourReducer;
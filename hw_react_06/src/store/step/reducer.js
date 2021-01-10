import ActionTypes from './actionTypes';

const step = (state = 1, action) => {
  switch (action.type) {
    case ActionTypes.NEXT:
      return state + 1      
    case ActionTypes.PREV:
      return state - 1
    default:
      return state;
  }
}

export default step;
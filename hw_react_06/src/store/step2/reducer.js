import ActionTypes from './actionTypes';

const stepTwoReducer = (state = {}, action) => {

  switch (action.type) {
    case ActionTypes.ADD_USER_ADDRESS_INFO:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }

}

export default stepTwoReducer;
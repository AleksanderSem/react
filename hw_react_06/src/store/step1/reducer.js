import ActionTypes from './actionTypes';

const stepOneReducer = (state = {}, action) => {

  switch (action.type) {
    case ActionTypes.ADD_USER_PERSONAL_INFO:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }

}

export default stepOneReducer;
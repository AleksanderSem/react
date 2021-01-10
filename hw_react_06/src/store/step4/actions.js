import ActionTypes from './actionTypes';

export const addUserPassword = (password) => {
  return {
    type: ActionTypes.ADD_USER_PASSWORD,
    payload: password    
  }
}
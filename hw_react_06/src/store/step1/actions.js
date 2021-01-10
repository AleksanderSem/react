import ActionTypes from './actionTypes';

export const addUserPersonalInfo = (name, surname, email) => {
  return {
    type: ActionTypes.ADD_USER_PERSONAL_INFO,
    payload: {
      name,
      surname,
      email
    }
  }
}
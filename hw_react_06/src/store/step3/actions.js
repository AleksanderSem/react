import ActionTypes from './actionTypes';

export const addUserAvatar = (avatarUrl) => {
  return {
    type: ActionTypes.ADD_USER_AVATAR,
    payload: {
      avatarUrl
    }
  }
}
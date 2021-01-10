import ActionTypes from './actionTypes';

export const nextStep = () => {
  return {
    type: ActionTypes.NEXT,
  }
}

export const prevStep = () => {
  return {
    type: ActionTypes.PREV,
  }
}
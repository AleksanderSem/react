import ActionTypes from './actionTypes';

export const addUserAddressInfo = (country, city, street, houseNumber) => {
  return {
    type: ActionTypes.ADD_USER_ADDRESS_INFO,
    payload: {
      country,
      city,
      street,
      houseNumber
    }
  }
}
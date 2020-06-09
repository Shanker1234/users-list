import * as actionTypes from "./actionTypes";
export const addUser = (user) => {
  return {
    type: actionTypes.ADD_USER,
    user: user,
  };
};

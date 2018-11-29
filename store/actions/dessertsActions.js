import * as actionTypes from "./types";

export const getCakeList = () => {
  return {
    type: actionTypes.GET_CAKE_LIST
  };
};

export const getCookieList = () => {
  return {
    type: actionTypes.GET_COOKIE_LIST
  };
};

export const getIcecreamList = () => {
  return {
    type: actionTypes.GET_ICECREAM_LIST
  };
};

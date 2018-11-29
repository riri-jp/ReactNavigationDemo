import * as actionTypes from "../actions/types";

import cakeData from "../../cakeData";
import cookieData from "../../cookieData";
import icecreamData from "../../icecreamData";

const initialState = {
  dessertList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAKE_LIST:
      return {
        ...state,
        dessertList: cakeData
      };
    case actionTypes.GET_COOKIE_LIST:
      return {
        ...state,
        dessertList: cookieData
      };
    case actionTypes.GET_ICECREAM_LIST:
      return {
        ...state,
        dessertList: icecreamData
      };
    default:
      return state;
  }
};

export default reducer;

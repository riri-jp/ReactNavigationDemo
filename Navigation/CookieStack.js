import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../Components/Home";
import List from "../Components/CookieList";
import Detail from "../Components/Detail";

const CookieStack = createStackNavigator(
  {
    CookieList: List,
    CookieDetail: Detail
  },
  {
    initialRouteName: "CookieList",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#90d4ed"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default CookieStack;

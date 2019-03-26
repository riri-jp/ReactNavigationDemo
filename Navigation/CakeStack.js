import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../Components/Home";
import List from "../Components/CakeList";
import Detail from "../Components/Detail";

const CakeStack = createStackNavigator(
  {
    CakeList: List,
    CakeDetail: Detail
  },
  {
    initialRouteName: "CakeList",
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

export default CakeStack;

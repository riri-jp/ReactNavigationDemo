import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../Components/Home";
import List from "../Components/IceCreamList";
import Detail from "../Components/Detail";

const IceCreamStack = createStackNavigator(
  {
    IceCreamList: List,
    IceCreamDetail: Detail
  },
  {
    initialRouteName: "IceCreamList",
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

export default IceCreamStack;

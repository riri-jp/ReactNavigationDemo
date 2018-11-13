import React from "react";

import { createStackNavigator } from "react-navigation";

import HomeScreen from "../Home";
import ListScreen from "../List";
import DetailScreen from "../Detail";
import ModalScreen from "../Modal";
import TabNav from "./BottomNavigator";

import icecreamData from "../../icecreamData";

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    List: {
      screen: props => <ListScreen {...props} flavorList={icecreamData} />
    },
    Detail: DetailScreen,
    Modal: {
      screen: ModalScreen,
      mode: "modal"
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#90d4ed"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNavigator;

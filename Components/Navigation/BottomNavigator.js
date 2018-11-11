import React from "react";
import { Icon } from "native-base";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import HomeScreen from "../Home";
import ListScreen from "../IceCreamList";
import DetailScreen from "../Detail";
import ModalScreen from "../Modal";

import RootStack from "./StackNavigator";

import data from "../../icecreamData";

const HomeTab = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    List: {
      screen: props => <ListScreen {...props} flavorList={data} />
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
      },
      hideTabBar: true
    }
  }
);

const ListTab = createStackNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: {
        headerTitle: "IceCream List"
      }
    },
    Detail: {
      screen: DetailScreen
    },
    Modal: {
      screen: ModalScreen,
      mode: "modal"
    }
  },
  {
    initialRouteName: "List",
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

const BottomTab = createBottomTabNavigator(
  {
    HomeTab: HomeTab,
    ListTab: ListTab
  },
  {
    initialRouteName: "HomeTab",

    backBehavior: "initialRouteName",
    tabBarOptions: {
      labelStyle: {
        backgroundColor: "transparent"
      },
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "#ffffff00"
      },
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

export default BottomTab;

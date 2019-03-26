import React from "react";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../Home";
import CakeListScreen from "../CakeList";
import CookieListScreen from "../CookieList";
import DetailScreen from "../Detail";
import ProfileScreen from "../Profile";

const headerConfig = {
  navigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#90d4ed"
    },
    headerTextStyle: {
      fontWeight: "bold"
    }
  }
};
const HomeNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

const CakeNav = createStackNavigator(
  {
    List: {
      screen: CakeListScreen
    },
    Detail: DetailScreen
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

const CookieNav = createStackNavigator(
  {
    List: CookieListScreen,
    Detail: DetailScreen
  },
  headerConfig
);

const ProfileNav = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  headerConfig
);

const BottomTab = createBottomTabNavigator({
  HomeTab: HomeNav,
  CookieTab: CookieNav,
  CakeTab: CakeNav,
  ProfileTab: ProfileNav
});

export default BottomTab;

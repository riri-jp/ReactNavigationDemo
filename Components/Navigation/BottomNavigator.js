import React from "react";
import { Icon } from "native-base";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import HomeScreen from "../Home";
import CakeListScreen from "../CakeList";
import CookieListScreen from "../CookieList";
import DetailScreen from "../Detail";
import ModalScreen from "../Modal";
import ProfileScreen from "../Profile";

import RootStack from "./StackNavigator";

import icecreamData from "../../icecreamData";
import cakeData from "../../cakeData";

import * as actionCreators from "../../store/actions/dessertsActions";
import { connect } from "react-redux";

const CakeTab = createStackNavigator(
  {
    List: {
      screen: CakeListScreen,
      navigationOptions: {
        headerTitle: "Cake List"
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

const CookieTab = createStackNavigator(
  {
    List: {
      screen: CookieListScreen,
      navigationOptions: {
        headerTitle: "Cookie List"
      }
    },
    Detail: {
      screen: DetailScreen,
      tabBarVisible: true
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

const ProfileTab = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Profile",
    navigationOptions: {
      headerTitle: "Profile",
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
    CookieTab: CookieTab,
    CakeTab: CakeTab,
    ProfileTab: ProfileTab
  },
  {
    initialRouteName: "CookieTab",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeTab") {
          iconName = "home";
        } else if (routeName === "CakeTab") {
          iconName = "birthday-cake";
        } else if (routeName === "CookieTab") {
          iconName = "certificate";
        } else if (routeName === "ProfileTab") {
          iconName = "female";
        }
        return (
          <Icon
            name={iconName}
            style={{ color: tintColor }}
            type="FontAwesome"
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    BottomTab: BottomTab
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default MainStack;

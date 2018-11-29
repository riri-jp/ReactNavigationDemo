import React from "react";
import { Icon } from "native-base";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import HomeScreen from "../Home";
import ListScreen from "../List";
import DetailScreen from "../Detail";
import ModalScreen from "../Modal";
import ProfileScreen from "../Profile";

import RootStack from "./StackNavigator";

import icecreamData from "../../icecreamData";
import cakeData from "../../cakeData";

import * as actionCreators from "../../store/actions/dessertsActions";
import { connect } from "react-redux";

const HomeTab = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
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

const ProfileTab = createStackNavigator({
  Profile: ProfileScreen
});

const IcecreamTab = createStackNavigator(
  {
    List: {
      screen: props => <ListScreen {...props} dessertType={"icecream"} />,
      navigationOptions: {
        headerTitle: "Icecream List"
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

const CakeTab = createStackNavigator(
  {
    List: {
      screen: props => <ListScreen {...props} dessertType={"cake"} />,
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
      screen: props => <ListScreen {...props} dessertType={"cookie"} />,
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

const BottomTab = createBottomTabNavigator(
  {
    IcecreamTab: IcecreamTab,
    CookieTab: CookieTab,
    CakeTab: CakeTab,
    ProfileTab: ProfileTab
  },
  {
    initialRouteName: "ProfileTab",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "IcecreamTab") {
          iconName = "ios-ice-cream";
          iconType = "Ionicons";
        } else if (routeName === "CakeTab") {
          iconName = "birthday-cake";
          iconType = "FontAwesome";
        } else if (routeName === "CookieTab") {
          iconName = "cookie";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "ProfileTab") {
          iconName = "female";
          iconType = "FontAwesome";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
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

const MainNav = createStackNavigator(
  {
    HomeScreen: HomeTab,
    BottomTab: BottomTab
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default MainNav;

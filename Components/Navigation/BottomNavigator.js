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
      tabBarIcon: <Icon name="home" />,
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

const IceCreamTab = createStackNavigator(
  {
    List: {
      screen: props => <ListScreen {...props} flavorList={icecreamData} />,
      navigationOptions: {
        headerTitle: "IceCream List"
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

const CakeTab = createStackNavigator(
  {
    List: {
      screen: props => <ListScreen {...props} flavorList={cakeData} />,
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

const ProfileTab = createStackNavigator({
  Profile: ProfileScreen
});

const BottomTab = createBottomTabNavigator(
  {
    HomeTab: HomeTab,
    IceCreamTab: IceCreamTab,
    CakeTab: CakeTab,
    ProfileTab: ProfileTab
  },
  {
    initialRouteName: "HomeTab",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeTab") {
          iconName = "home";
        } else if (routeName === "IceCreamTab") {
          iconName = "birthday-cake";
        } else if (routeName === "CakeTab") {
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

export default BottomTab;

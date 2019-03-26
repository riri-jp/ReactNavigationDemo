import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";
import CookieStack from "./CookieStack";
import CakeStack from "./CakeStack";
import IceCreamStack from "./IceCreamStack";
import HomeStack from "./HomeNav";

import Home from "../Components/Home";

const BottomTab = createBottomTabNavigator(
  {
    Home: HomeStack,
    IceCream: IceCreamStack,
    Cookie: CookieStack,
    Cake: CakeStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        if (routeName === "Home") {
          iconName = "home";
          iconType = "FontAwesome";
        } else if (routeName === "Cookie") {
          iconName = "cookie";
          iconType = "FontAwesome5";
        } else if (routeName === "Cake") {
          iconName = "cake";
          iconType = "Entypo";
        } else if (routeName === "IceCream") {
          iconName = "md-ice-cream";
          iconType = "Ionicons";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: tintColor, fontSize: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "purple",
      inactiveTintColor: "gray",
      activeBackgroundColor: "white",
      style: {
        backgroundColor: "#ffd1dc"
      }
    }
  }
);

export default BottomTab;

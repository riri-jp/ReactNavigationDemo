import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../Components/Home";
import List from "../Components/CookieList";
import Detail from "../Components/Detail";

const HomeStack = createStackNavigator(
  {
    Home: Home,
    CookieList: List
  },
  {
    initialRouteName: "Home",
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

export default HomeStack;

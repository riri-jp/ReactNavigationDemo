import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./Home";
import List from "./List";
import Detail from "./Detail";

const MyStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    ListScreen: List,
    DetailScreen: Detail
  },
  {
    initialRouteName: "HomeScreen",

    defaultNavigationOptions: {
      // headerTransparent: true,
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

const MyContainer = createAppContainer(MyStack);

export default MyContainer;

import { createStackNavigator } from "react-navigation";

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

export default MyStack;

import { createStackNavigator } from "react-navigation";

import HomeScreen from "../Home";

const HomeNav = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
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

export default HomeNav;

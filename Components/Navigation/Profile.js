import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../Home";

import ProfileScreen from "../Profile";

const ProfileNav = createStackNavigator(
  {
    Profile: ProfileScreen
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

export default ProfileNav;

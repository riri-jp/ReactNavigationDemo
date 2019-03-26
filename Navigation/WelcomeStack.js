import { createStackNavigator } from "react-navigation";

import BottomNav from "./BottomNav";
import Welcome from "../Components/Home";

const WelcomeStack = createStackNavigator(
  {
    Welcome: Welcome,
    BottomNav: BottomNav
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default WelcomeStack;

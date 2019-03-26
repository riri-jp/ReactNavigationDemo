import { createStackNavigator } from "react-navigation";

import CookieListScreen from "../CookieList";
import DetailScreen from "../Detail";

const CookieNav = createStackNavigator(
  {
    CookieList: CookieListScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "CookieList",
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

export default CookieNav;

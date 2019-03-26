import { createStackNavigator } from "react-navigation";

import CakeListScreen from "../CakeList";
import DetailScreen from "../Detail";

const CakeNav = createStackNavigator(
  {
    CakeList: CakeListScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "CakeList",
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

export default CakeNav;

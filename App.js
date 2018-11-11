import React from "react";
import { StyleSheet, Text, View } from "react-native";

import RootStack from "./Components/Navigation/StackNavigator";
import BottomNav from "./Components/Navigation/BottomNavigator";

export default class App extends React.Component {
  render() {
    return <BottomNav />;
  }
}

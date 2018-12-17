import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./Components/Home";
import ListScreen from "./Components/List";
import DetailScreen from "./Components/Detail";

import MyStack from "./Components/Navigation";

export default class App extends React.Component {
  render() {
    return <MyStack />;
  }
}

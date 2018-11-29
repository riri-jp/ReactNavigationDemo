import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/dessertsReducer";

import { StyleSheet, Text, View } from "react-native";

import RootStack from "./Components/Navigation/StackNavigator";
import BottomNav from "./Components/Navigation/BottomNavigator";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BottomNav />
      </Provider>
    );
  }
}

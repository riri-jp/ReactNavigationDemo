import React, { Component } from "react";

import { Container, Content } from "native-base";
import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "native-base";
import HeaderButton from "./HeaderButton";

import styles from "../styles";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name"),
      headerRight: (
        <HeaderButton
          handleIncrement={navigation.getParam("handleIncrement")}
        />
      ),
      headerStyle: {
        backgroundColor: "#ffd1dc"
      }
    };
  };

  componentDidMount = () => {
    this.props.navigation.setParams({ handleIncrement: this.handleIncrement });
  };

  state = {
    counter: 0
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://previews.123rf.com/images/sonyakamoz/sonyakamoz1708/sonyakamoz170800092/84638000-flatlay-of-pastel-pink-strawberry-and-coconut-ice-cream-scoops-sweet-waffle-cones-on-white-plate-ove.jpg"
        }}
        style={styles.container}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.topStyling}>
            <Text style={styles.homeTitle}>THE ICECREAM GALLERY</Text>
            <Button
              transparent
              light
              style={styles.buttonStyling}
              onPress={() => this.props.navigation.replace("BottomNav")}
            >
              <Text style={styles.buttonTextStyling}>FLAVORS LIST</Text>
            </Button>
            <Button
              transparent
              light
              style={styles.buttonStyling}
              onPress={() => this.props.navigation.setParams({ name: "Lailz" })}
            >
              <Text style={styles.buttonTextStyling}>Change Title</Text>
            </Button>
            <Text style={styles.buttonTextStyling}>{this.state.counter}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

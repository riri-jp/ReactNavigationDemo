import React, { Component } from "react";

import { Container, Content } from "native-base";
import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "native-base";

import styles from "../styles";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let increaseCount = navigation.getParam("increaseCount");
    return {
      title: navigation.getParam("name"),
      headerStyle: {
        backgroundColor: "#ffd1dc"
      },
      headerRight: (
        <Button transparent light onPress={increaseCount}>
          <Text>COUNT</Text>
        </Button>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this.increaseCount });
  }

  increaseCount() {
    let newCounter = this.state.counter + 1;
    this.setState({ counter: newCounter });
  }

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
              onPress={() => this.props.navigation.navigate("ListScreen")}
            >
              <Text style={styles.buttonTextStyling}>FLAVORS LIST</Text>
            </Button>
            <Button
              transparent
              light
              style={styles.buttonStyling}
              onPress={() => this.props.navigation.setParams({ name: "Lailz" })}
            >
              <Text style={styles.buttonTextStyling}>Change TITLE</Text>
            </Button>
            <Text style={styles.buttonTextStyling}>{this.state.counter}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

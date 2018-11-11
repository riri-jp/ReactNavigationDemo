import React, { Component } from "react";

import { Container, Content } from "native-base";
import { Image, ImageBackground, Text, View } from "react-native";
import { Button } from "native-base";

import styles from "../styles";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
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
              onPress={() => this.props.navigation.navigate("List")}
            >
              <Text style={styles.buttonTextStyling}>FLAVORS LIST</Text>
            </Button>
            <Button
              transparent
              light
              style={styles.buttonStyling}
              onPress={() => this.props.navigation.setParams({ name: "Lailz" })}
            >
              <Text style={styles.buttonTextStyling}>
                Set title name to 'Lailz'
              </Text>
            </Button>
            <Text style={styles.buttonTextStyling}>{this.state.count}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

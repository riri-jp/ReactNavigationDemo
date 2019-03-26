import React, { Component } from "react";
import { Button, Image, View, Text } from "react-native";
import { Body, Card, CardItem, Content, Container } from "native-base";
import styles from "../styles";

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("flavor").flavorName
    };
  };
  render() {
    const flavor = this.props.navigation.getParam("flavor");
    return (
      <Container>
        <Content>
          <View>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    style={styles.icecreamImage}
                    source={{ uri: flavor.image_url }}
                  />
                  <Text>FLAVOR: {flavor.flavorName}</Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              title="BACK"
              color="#6C788E"
              onPress={() => this.props.navigation.goBack()}
            />
            <Button
              title="HOME"
              color="#6C788E"
              onPress={() => this.props.navigation.navigate("Home")}
            />
            <Button
              title="HOME"
              color="#6C788E"
              onPress={() => this.props.navigation.navigate("Home")}
            />
            <Button
              title="HOME 2"
              color="#6C788E"
              onPress={() => this.props.navigation.push("Home")}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default DetailsScreen;

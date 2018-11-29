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
    let flavor = this.props.navigation.getParam("flavor", {
      flavorName: "Chocolate",
      image_url: "http://www.theold27icecreamshop.com/images/icecream.png"
    });
    return (
      <Container>
        <Content>
          <View>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={{
                      uri: flavor.image_url
                    }}
                    style={styles.icecreamImage}
                  />
                </Body>
              </CardItem>
            </Card>
            <Button
              title="BACK"
              color="#6C788E"
              onPress={() => this.props.navigation.goBack()}
            />
            <Button
              title="TAKE ME AWAY"
              color="#6C788E"
              onPress={() => this.props.navigation.push("Home")}
            />
            <Button
              title="TAKE ME AWAAAAAY"
              color="#6C788E"
              onPress={() => this.props.navigation.navigate("Home")}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default DetailsScreen;

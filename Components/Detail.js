import React, { Component } from "react";
import { Button, Image, View, Text } from "react-native";
import { Body, Card, CardItem, Content, Container } from "native-base";
import styles from "../styles";

class DetailsScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Card>
              <CardItem>
                <Body>
                  <Image style={styles.icecreamImage} />
                  <Text>FLAVOR: </Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              title="BACK"
              color="#6C788E"
              onPress={() => alert("Come Baaack!")}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default DetailsScreen;

import React from "react";
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  List,
  ListItem,
  Text,
  View
} from "native-base";
import { Button } from "react-native";

import data from "../data";
import styles from "../styles";

class ListScreen extends React.Component {
  render() {
    let icecreamFlavors = data.map(flavorScoop => (
      <ListItem onPress={() => alert("IceCream Details")}>
        <Text style={styles.flavorList}>{flavorScoop.flavorName}</Text>
      </ListItem>
    ));

    return (
      <Container>
        <Content>
          <View>
            <List>{icecreamFlavors}</List>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ListScreen;

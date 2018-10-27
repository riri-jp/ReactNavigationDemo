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
  static navigationOptions = {
    title: "List"
  };
  render() {
    let icecreamFlavors = data.map(flavorScoop => (
      <ListItem
        onPress={() =>
          this.props.navigation.navigate("Detail", { flavor: flavorScoop })
        }
      >
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

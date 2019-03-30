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
    title: "List",
    headerRight: (
      <Button title="OPTIONS" color="white" onPress={() => alert("HELLOOO")} />
    )
  };
  render() {
    let icecreamFlavors = data.map(flavor => (
      <ListItem
        key={flavor.id}
        onPress={() =>
          this.props.navigation.navigate("DetailScreen", {
            flavor: flavor
          })
        }
      >
        <Text style={styles.flavorList}>{flavor.flavorName}</Text>
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

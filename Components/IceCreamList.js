import React from "react";
import {
  Body,
  Button,
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
import Flavor from "./Flavor";
import data from "../data";
import HeaderButton from "./HeaderButton";

class ListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "List",
      headerRight: <HeaderButton />
    };
  };
  render() {
    let icecreamFlavors = data.map(flavor => (
      <Flavor flavor={flavor} key={flavor.id} />
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

import React from "react";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  List,
  ListItem,
  Text,
  View
} from "native-base";

import styles from "../styles";

import flavorList from "../cookieData";

class CookieList extends React.Component {
  render() {
    let flavors = flavorList.map(flavor => (
      <ListItem
        key={flavor.flavorName}
        onPress={() =>
          this.props.navigation.navigate("CookieDetail", {
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
            <List>{flavors}</List>
          </View>
        </Content>
      </Container>
    );
  }
}

export default CookieList;

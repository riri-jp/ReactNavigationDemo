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

import data from "../icecreamData";
import styles from "../styles";

class ListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "IceCream List",
      headerRight: (
        <Button transparent light onPress={() => navigation.navigate("Modal")}>
          <Text style={styles.buttonTextStyling}>INFO</Text>
        </Button>
      )
    };
  };
  render() {
    let flavorList = this.props.flavorList;
    let flavors = data.map(flavor => (
      <ListItem
        key={flavor.flavorName}
        onPress={() =>
          this.props.navigation.navigate("Detail", {
            flavor: flavor,
            tabBarVisible: true
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

export default ListScreen;

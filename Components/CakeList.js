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
    let icecreamFlavors = data.map(icecreamFlavor => (
      <ListItem
        key={icecreamFlavor.flavorName}
        onPress={() =>
          this.props.navigation.navigate("Detail", {
            flavor: icecreamFlavor,
            tabBarVisible: true
          })
        }
      >
        <Text style={styles.flavorList}>{icecreamFlavor.flavorName}</Text>
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

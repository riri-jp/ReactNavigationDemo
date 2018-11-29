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

import flavorList from "../cakeData";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions/index";

class ListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button transparent light onPress={() => navigation.navigate("Modal")}>
          <Text style={styles.buttonTextStyling}>INFO</Text>
        </Button>
      )
    };
  };

  render() {
    let flavors = flavorList.map(flavor => (
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

const mapStateToProps = state => {
  return {
    dessertList: state.dessertList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCakeList: () => dispatch(actionCreators.getCakeList()),
    fetchCookieList: () => dispatch(actionCreators.getCookieList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);

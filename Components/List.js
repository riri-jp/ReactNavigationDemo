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

import cakeList from "../cakeData";
import cookieList from "../cookieData";
import icecreamList from "../icecreamData";

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

  constructor(props) {
    super(props);
    this.state = {
      dessertType: []
    };
  }

  fetchDessert() {
    if (this.props.dessertType === "cake") {
      this.setState({ dessertType: cakeList });
    } else if (this.props.dessertType === "cookie") {
      this.setState({ dessertType: cookieList });
    } else if (this.props.dessertType === "icecream") {
      this.setState({ dessertType: icecreamList });
    }
  }

  componentDidMount() {
    this.fetchDessert();
  }

  componentDidUpdate(prevProps) {
    if (this.props.dessertType != prevProps.dessertType) {
      this.fetchDessert();
    }
  }

  render() {
    let flavors = this.state.dessertType.map(flavor => (
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

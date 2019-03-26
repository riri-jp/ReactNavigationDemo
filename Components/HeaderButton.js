import React, { Component } from "react";
import { Button, Text } from "native-base";

export default class HeaderButton extends Component {
  render() {
    return (
      <Button transparent onPress={this.props.handleIncrement}>
        <Text>HELLLO</Text>
      </Button>
    );
  }
}

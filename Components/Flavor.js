import React from "react";
import { ListItem, Text } from "native-base";
import { withNavigation } from "react-navigation";

import styles from "../styles";

class Flavor extends React.Component {
  render() {
    const { flavor } = this.props;
    return (
      <ListItem
        onPress={() =>
          this.props.navigation.navigate("IceCreamDetail", { flavor: flavor })
        }
      >
        <Text style={styles.flavorList}>{flavor.flavorName}</Text>
      </ListItem>
    );
  }
}

export default withNavigation(Flavor);

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

import styles from "../styles";

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        <Text style={styles.authTitle}>Cardi B</Text>
      </View>
    );
  }
}

export default ProfileScreen;

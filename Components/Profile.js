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
import { Image } from "react-native";

import profileImage from "../assets/lailoo.jpg";
import styles from "../styles";

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        <Text style={styles.authTitle}>Bakery Owner</Text>

        <Image source={profileImage} style={styles.profileimage} />
        <Text style={styles.profiletext}>Cardi B</Text>
      </View>
    );
  }
}

export default ProfileScreen;

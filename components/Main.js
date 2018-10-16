import React, { Component } from "react";
import { View, Text } from "react-native";

const styles = {
  body: {
    padding: 60
  }
};

export default class Main extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Here is the main page.</Text>
      </View>
    );
  }
}

import React, { Component } from "react";
import { View, Text } from "react-native";

const styles = {
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 2,
    marginLeft: "auto",
    marginRight: "auto", 
    marginBottom: 20,
    padding: 20
  },
  titleText: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 10
  }
};

export default class MainCard extends Component {
  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text>{props.excerpt}</Text>
      </View>
    );
  }
}

import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import MonthSelecter from "./MonthSelecter";
// import MonthDisplay from "./MonthDisplay";

const styles = {
  body: {

  }
};

export default class Main extends Component {
  render() {
    return (
      <View style={styles.body}>
        <MonthSelecter />
      </View>
    );
  }
}

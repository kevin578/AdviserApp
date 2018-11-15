import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import MonthSelecter from "./MonthSelecter";
import ContentView from "./ContentView";

const styles = {
  body: {
    flex: 1
  }
};

export default class Main extends Component {
  render() {
    return (
      <View style={styles.body}>
        <MonthSelecter />
        <ContentView />
      </View>
    );
  }
}

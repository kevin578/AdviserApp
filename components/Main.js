import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import MonthSelecter from "./MonthSelecter";
import SideMenu from "./SideMenu";
// import MonthDisplay from "./MonthDisplay";

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
      </View>
    );
  }
}

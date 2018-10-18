import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  },
  monthContainer: {
    backgroundColor: "green",
    margin: 20,
    width: 200
  }
});

export default class MonthSelecter extends Component {
  renderItems = item => (
    <View style={styles.monthContainer}>
      <Text>{item.key}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ key: "October" }, { key: "November" }]}
          renderItem={({ item }) => this.renderItems(item)}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    );
  }
}

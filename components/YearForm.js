import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import YearCheckbox from "./YearCheckbox";

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginTop: 80,
    textAlign: "center"
  }
});

export default class YearForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>What year are you?</Text>
        <YearCheckbox year="Freshman" />
        <YearCheckbox year="Sophmore" />
        <YearCheckbox year="Junior" />
        <YearCheckbox year="Senior" />
        <Button
          onPress={() => Actions.MainBucket()}
          title="Next"
          accessibilityLabel="Button to confirm year"
        />
      </View>
    );
  }
}

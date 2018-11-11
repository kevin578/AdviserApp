import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import Touchable from "react-native-platform-touchable";
import YearCheckbox from "./YearCheckbox";

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginTop: 40,
    marginBottom: 30,
    textAlign: "center"
  },

  buttonContainer: {
    marginTop: 50,
    flex: 1,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 18
  },

  button: {
    backgroundColor: "#337ab7",
    height: 60,
    width: "80%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class YearForm extends Component {

  getButtonText = ()=> {
    const {props} = this;
    if (props.updateTitle) {
      return "Update";
    }
    return "Next"
  }

  render() {
    const  { getButtonText } = this;
    return (
      <View>
        <Text style={styles.title}>Select Your Year</Text>
        <YearCheckbox year="Freshman" />
        <YearCheckbox year="Sophmore" />
        <YearCheckbox year="Junior" />
        <YearCheckbox year="Senior" />
        <View style={styles.buttonContainer}>
          <Touchable
            onPress={() => Actions.MainBucket()}
            style={styles.button}
            accessibilityLabel="Button to confirm year"
          >
            <Text style={styles.buttonText}>{getButtonText()}</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

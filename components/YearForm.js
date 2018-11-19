import React, { Component } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Touchable from "react-native-platform-touchable";
import YearCheckbox from "./YearCheckbox";
import * as actions from "../actions";

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
  },

  buttonDisabled: {
    opacity: .3
  }

});

class YearForm extends Component {
  getButtonText = () => {
    const { props } = this;
    if (props.updateTitle) {
      return "Update";
    }
    return "Next";
  };

  getButtonStyle = () => {
    const {props} = this;
    if(props.user.formYear) {
      return styles.button;
    }
    return StyleSheet.flatten([styles.button, styles.buttonDisabled]);
  }

  buttonPress = () => {
    const { props } = this;
    props.setUserYear(props.user.formYear);
    AsyncStorage.setItem('year', props.user.formYear);
    Actions.MainBucket();
  };

  render() {
    const { getButtonText, props } = this;
    return (
      <View>
        <Text style={styles.title}>Select Your Year</Text>
        <YearCheckbox year="Freshman" />
        <YearCheckbox year="Sophmore" />
        <YearCheckbox year="Junior" />
        <YearCheckbox year="Senior" />
        <View style={styles.buttonContainer}>
          <Touchable
            onPress={() => this.buttonPress()}
            style={this.getButtonStyle()}
            accessibilityLabel="Button to confirm year"
            disabled={!(props.user.formYear)}
          >
            <Text style={styles.buttonText}>{getButtonText()}</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  actions
)(YearForm);

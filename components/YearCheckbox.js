import React, { Component } from "react";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";
import * as actions from "../actions";

const styles = StyleSheet.create({
  checkboxContainerStyle: {
    backgroundColor: "white",
    borderWidth: 0,
    paddingLeft: 20,
    marginTop: 20
  },
  checkboxTextStyle: {
    fontSize: 18
  }
});

class YearCheckbox extends Component {
  checkboxPress = year => {
    const { user, clearUserYear, setUserYear } = this.props;
    const existingYear = user.year;
    if (existingYear === year) {
      clearUserYear();
    } else {
      setUserYear(year);
    }
  };

  render() {
    const { user, year } = this.props;

    return (
      <CheckBox
        title={year}
        checkedColor="blue"
        checked={user.year === year}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => this.checkboxPress(year)}
        containerStyle={styles.checkboxContainerStyle}
        textStyle={styles.checkboxTextStyle}
      />
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
)(YearCheckbox);
import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import {connect} from "react-redux";
import { Icon } from "react-native-elements";
import Touchable from "react-native-platform-touchable";
import * as actions from "../actions";

const monthContainerHeight = 100;

const styles = StyleSheet.create({
  MonthDisplayContainer: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: monthContainerHeight / 2
  },
  monthContainer: {
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    height: monthContainerHeight,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#212121"
  },

  arrowContainer: {
    top: 25,
    borderWidth: 3,
    borderColor: "#212121",
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

class MonthDisplay extends Component {
  touchButton = () => {
    console.log("clicked");
  };

  render() {
      const { month } = this.props;
    return (
      <View style={styles.MonthDisplayContainer}>
        <Touchable onPress={this.touchButton}>
          <View style={styles.arrowContainer}>
            <Icon name="arrow-back" />
          </View>
        </Touchable>
        <View style={styles.monthContainer}>
          <Text style={styles.monthText}>{month.currentMonth}</Text>
        </View>
        <Touchable>
          <View style={styles.arrowContainer}>
            <Icon name="arrow-forward" />
          </View>
        </Touchable>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return ({
      month: state.month
    })
  }
  
  export default connect(mapStateToProps, actions)(MonthDisplay);
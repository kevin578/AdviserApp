import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Touchable from "react-native-platform-touchable";
import { Actions } from "react-native-router-flux";

const styles = {
  menuContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  menuTitleContainer: {
    marginTop: 25,
    height: 100,
    borderBottomWidth: 1
  },
  menuTitleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  menuTitleText: {
    fontSize: 24
  },
  menuItemContainer: {
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 60
  },
  menuItemView: {
    marginLeft: 20
  },
  menuItemText: {
    fontSize: 18
  }
};

export default class SideMenu extends Component {
  goToPage = page => {
    Actions[page].call()
    Actions.drawerClose();
  };

  render() {
    const { application } = this.props;
    return (
      <View>
        <View style={styles.menuTitleContainer}>
          <View style={styles.menuTitleView}>
            <Text style={styles.menuTitleText}>AdviserApp</Text>
          </View>
        </View>

        <Touchable
          style={styles.menuItemContainer}
          onPress={() => this.goToPage("Main")}
        >
          <View style={styles.menuItemView}>
            <Text style={styles.menuItemText}>Home</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.menuItemContainer}
          onPress={() => this.goToPage("changeYear")}
        >
          <View style={styles.menuItemView}>
            <Text style={styles.menuItemText}>Year</Text>
          </View>
        </Touchable>
      </View>
    );
  }
}

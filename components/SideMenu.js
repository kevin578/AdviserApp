import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import SideMenuComponent from "react-native-side-menu";

const styles = {
  menuContainer: {
    flex: 1,
    width: 200,
    backgroundColor: "white",
  }
};

class SideMenu extends Component {
  render() {
    const { application } = this.props;
    return (
      <SideMenuComponent hiddenMenuOffset={-200} openMenuOffset={0} isOpen={application.menuIsOpen}>
        <View style={styles.menuContainer}>
          <Text>Its a menu!!!</Text>
        </View>
      </SideMenuComponent>
    );
  }
}

function mapStateToProps(state) {
  return {
    application: state.application
  };
}

export default connect(mapStateToProps)(SideMenu);

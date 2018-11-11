import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Scene, Router, Drawer } from "react-native-router-flux";
import YearForm from "./YearForm";
import hamburgerIcon from "../assets/hamburger.png";
import Main from "./Main";
import SideMenu from "./SideMenu";

const styles = StyleSheet.create({
  container: {},
  menuButton: {
    width: 25,
    height: 25
  }
});

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="StartBucket" initial>
            <Scene key="Year" component={YearForm} Title="Year" />
          </Scene>

          <Scene
            key="MainBucket"
            drawer
            drawerImage={hamburgerIcon}
            contentComponent={SideMenu}
            style={styles.drawer}
          >
            <Scene
              key="Main"
              component={Main}
              title="Adviser App"
              leftButtonIconStyle={styles.menuButton}
            />
            <Scene
              key="changeYear"
              component={YearForm}
              title="Adviser App"
              leftButtonIconStyle={styles.menuButton}
              updateTitle
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

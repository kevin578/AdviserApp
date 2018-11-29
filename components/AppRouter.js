import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import { createStore, store } from "redux";
import { Scene, Router, Drawer } from "react-native-router-flux";
import YearForm from "./YearForm";
import hamburgerIcon from "../assets/hamburger.png";
import Main from "./Main";
import SideMenu from "./SideMenu";
import ItemView from "./ItemView";

const styles = StyleSheet.create({
  container: {},
  menuButton: {
    padding: 15,
    width: 30,
    height: 30
  }
});

export default class AppRouter extends React.Component {
  state = {
    isLoaded: false,
    year: ""
  };

  componentDidMount() {
    AsyncStorage.getItem("year")
      .then(year => {
        this.setState({
          isLoaded: true,
          year
        });
      })
      .catch(err => {
        this.setState({ isLoaded: true });
      });
  }

  render() {
    const { state } = this;
    if (state.isLoaded) {
      return (
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="StartBucket">
              <Scene key="Year" component={YearForm} Title="Year" />
            </Scene>

            <Scene
              key="MainBucket"
              drawer
              drawerImage={hamburgerIcon}
              contentComponent={SideMenu}
              style={styles.drawer}
              initial={state.year}
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
              <Scene key="itemView" component={ItemView} back />
            </Scene>
          </Scene>
        </Router>
      );
    }

    return <View />;
  }
}

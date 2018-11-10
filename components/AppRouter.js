import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { connect } from "react-redux";
import { Scene, Router } from "react-native-router-flux";
import YearForm from "./YearForm";
import hamburgerIcon from "../assets/hamburger.png";
import Main from "./Main";
import * as actions from "../actions";

const styles = StyleSheet.create({
    container: {},
    menuButton: {
      width: 25,
      height: 25
    }
  });

class AppRouter extends React.Component {

  toggleMenu = ()=> {
    const  { application, toggleMenu } = this.props;
    const newMenuState = !application.menuIsOpen;
    toggleMenu(newMenuState);
  }


  render() {
    // this.props.toggleMenu(false);
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="StartBucket">
            <Scene key="Year" component={YearForm} Title="Year" />
          </Scene>
          <Scene key="MainBucket" initial>
            <Scene
              key="Main"
              component={Main}
              title="Adviser App"
              leftButtonImage={hamburgerIcon}
              leftButtonIconStyle={styles.menuButton}
              onLeft={this.toggleMenu}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return ({
    application: state.application,
    month: state.month
  })
}

export default connect(mapStateToProps, actions)(AppRouter)
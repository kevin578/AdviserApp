import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Scene, Router } from "react-native-router-flux";
import devToolsEnhancer from "remote-redux-devtools";
import YearForm from "./components/YearForm";
import Main from "./components/Main";
import reducers from "./reducers";

const styles = StyleSheet.create({
  container: {}
});

const store = createStore(reducers, {}, devToolsEnhancer({ realtime: true }));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="StartBucket">
              <Scene key="Year" component={YearForm} Title="Year" />
            </Scene>
            <Scene key="MainBucket" initial>
              <Scene key="Main" component={Main} title="Main" />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

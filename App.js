import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, connect } from "redux";
import { Provider } from "react-redux";
import devToolsEnhancer from "remote-redux-devtools";
import * as actions from "./actions";
import AppRouter from "./components/AppRouter";
import reducers from "./reducers";
import SideMenu from "./components/SideMenu";

const store = createStore(
  reducers,
  {},
  devToolsEnhancer({ realtime: true, serializeState: false })
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <AppRouter />
      </Provider>
    );
  }
}

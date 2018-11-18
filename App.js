import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, connect } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import devToolsEnhancer from "remote-redux-devtools";
import * as actions from "./actions";
import AppRouter from "./components/AppRouter";
import reducers from "./reducers";
import SideMenu from "./components/SideMenu";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["month"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  {},
  devToolsEnhancer({ realtime: true, serializeState: false })
);

const persister = persistStore(store);

export default class App extends React.Component {
  render() {
    const { year } = store.getState().user;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <AppRouter year={year} />
        </PersistGate>
      </Provider>
    );
  }
}

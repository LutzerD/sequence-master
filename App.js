import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { initialState } from "./memorize/reducers/reducer";
import configureStore from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import RouterContainer from "./memorize/router-container";

const { store, persistor } = configureStore(initialState);

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <RouterContainer />
      {/* </PersistGate> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

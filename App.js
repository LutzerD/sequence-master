import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import MemorizeContainer from "./memorize/memorize-container";
import { initialState } from "./memorize/reducers/reducer";
import configureStore from "./store/configureStore";
const store = configureStore(initialState);

export default function App() {
  return (
    <Provider store={store}>
      <MemorizeContainer />
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

import { miniSerializeError } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { screenReducer, numberReducer, settingsReducer } from "./reducer";

// Root Reducer
export const rootReducer = combineReducers({
  number: numberReducer,
  screen: screenReducer,
  settings: settingsReducer,
});

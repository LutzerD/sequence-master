import { miniSerializeError } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { modeReducer, numberReducer, settingsReducer } from "./reducer";

// Root Reducer
export const rootReducer = combineReducers({
  number: numberReducer,
  mode: modeReducer,
  settings: settingsReducer,
});

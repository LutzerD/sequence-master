import { combineReducers } from "redux";
import { memorizeReducer } from "./reducer";

// Root Reducer
export const rootReducer = combineReducers({
  number: memorizeReducer,
});

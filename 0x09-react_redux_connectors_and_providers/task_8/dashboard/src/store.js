import { createStore } from "redux";
import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer"; // Import your uiReducer

const rootReducer = combineReducers({
  ui: uiReducer, // Combine your reducers
});

const store = createStore(rootReducer);

export default store;

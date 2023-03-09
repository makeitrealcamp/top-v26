import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import messageReducer from "./reducers/messageReducer";
import counterReducer from "./reducers/counterReducer";

const reducers = combineReducers({
  message: messageReducer,
  counter: counterReducer,
});

const initialState = {
  message: "Default message",
  counter: 0,
};

function configureStore() {
  return createStore(reducers, initialState, composeWithDevTools());
}

export default configureStore();

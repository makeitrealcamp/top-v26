import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import messageReducer from "./reducers/messageReducer";
import counterReducer from "./reducers/counterReducer";
import reposReducer from "./reducers/reposReducer";

const reducers = combineReducers({
  message: messageReducer,
  counter: counterReducer,
  github: reposReducer,
});

const initialState = {
  message: "Default message",
  counter: 0,
  github: {},
};

function configureStore() {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default configureStore();

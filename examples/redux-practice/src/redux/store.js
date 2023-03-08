import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import messageReducer from "./reducers/messageReducer";
import thunk from "redux-thunk";
/*
const reducers = combineReducers({
  message: 
})*/

function configureStore(state = { message: "Default message" }) {
  return createStore(messageReducer, state, applyMiddleware(thunk));
}

export default configureStore();

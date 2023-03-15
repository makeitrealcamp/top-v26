import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import reposReducer from "../features/repos/repoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    repositories: reposReducer,
  },
});

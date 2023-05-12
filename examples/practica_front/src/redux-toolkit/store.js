import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    user: userReducer,
  },
});

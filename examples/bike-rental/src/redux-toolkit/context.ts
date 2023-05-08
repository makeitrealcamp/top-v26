import { createContext, Context } from "react";
import { ReactReduxContextValue } from "react-redux";

export const globalContext: Context<ReactReduxContextValue> = createContext(
  {} as ReactReduxContextValue
);

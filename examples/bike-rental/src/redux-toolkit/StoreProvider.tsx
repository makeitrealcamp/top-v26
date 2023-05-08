import { Provider } from "react-redux";

import { store } from "./store";
import { globalContext } from "./context";
import { StoreProviderProps } from "../types";

export const GlobalStoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store} context={globalContext}>
      {children}
    </Provider>
  );
};

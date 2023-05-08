import { createDispatchHook, createSelectorHook } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { globalContext } from "./context";

export const useGlobalDispatch: () => AppDispatch =
  createDispatchHook(globalContext);
export const useGlobalSelector: TypedUseSelectorHook<RootState> =
  createSelectorHook(globalContext);

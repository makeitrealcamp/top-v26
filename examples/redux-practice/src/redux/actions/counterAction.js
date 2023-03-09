import { COUNTER_ADD, COUNTER_SUBSTRACT } from "./actions";

export const counterAdd = () => {
  return {
    type: COUNTER_ADD,
  };
};

export const counterSubstract = () => {
  return {
    type: COUNTER_SUBSTRACT,
  };
};

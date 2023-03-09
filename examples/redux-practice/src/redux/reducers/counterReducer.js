import { COUNTER_ADD, COUNTER_SUBSTRACT } from "../actions/actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_ADD:
      return {
        counter: state + 1,
      };
    case COUNTER_SUBSTRACT:
      return {
        counter: state - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;

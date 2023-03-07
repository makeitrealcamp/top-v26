const messageReducer = (state, action) => {
  switch (action.type) {
    case "set":
      return {
        message: action.payload,
      };
    case "clear":
      return {
        message: "",
      };

    default:
      return state;
  }
};

export default messageReducer;

const messageReducer = (state = "", action) => {
  switch (action.type) {
    case "set":
      return action.payload;
    case "clear":
      return "";
    default:
      return state;
  }
};

export default messageReducer;

const messageReducer = (state, action) => {
  console.log("action", state, action);
  switch (action.type) {
    case "set":
      return {
        message: action.payload,
        ...state,
      };
    case "clear":
      return {
        message: "",
      };

    case "setRepos":
      return {
        repos: action.payload,
        ...state,
      };

    default:
      return state;
  }
};

export default messageReducer;

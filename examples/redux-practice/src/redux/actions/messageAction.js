export const setMessage = (payload) => {
  return {
    type: "set",
    payload,
  };
};

export const clearMessage = () => {
  return {
    type: "clear",
  };
};

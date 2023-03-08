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

export const setRepos = (payload) => {
  return {
    type: "setRepos",
    payload,
  };
};

export const getRepos = () => async (dispatch) => {
  console.log("en getRepos");
  const request = await fetch("https://api.github.com/users/mariadriada/repos");
  const data = await request.json();
  dispatch(setRepos(data));
};

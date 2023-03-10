import { GET_REPOS } from "./actions";

const getRepos = (payload) => {
  return {
    type: GET_REPOS,
    payload,
  };
};

export const fetchRepos = () => async (dispatch) => {
  const url = "https://api.github.com/users/mariadriada/repos";

  try {
    const request = await fetch(url);
    const data = await request.json();
    dispatch(getRepos(data));
  } catch (error) {}
};

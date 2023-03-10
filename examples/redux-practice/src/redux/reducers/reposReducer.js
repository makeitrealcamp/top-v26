import { GET_REPOS } from "../actions/actions";

const reposReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repositories: action.payload,
      };

    default:
      return state;
  }
};

export default reposReducer;

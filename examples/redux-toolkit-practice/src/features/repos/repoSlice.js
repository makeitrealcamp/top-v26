import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRepos } from "./reposAPI";

const initialState = {
  loading: false,
  title: "Default title",
  list: [],
};

export const getReposAsync = createAsyncThunk(
  "repositories/getRepos",
  async () => {
    const data = await fetchRepos();
    return data;
  }
);

const repoSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    clearTitle: (state) => {
      state.title = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReposAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReposAsync.fulfilled, (state, action) => {
        console.log("getReposAsync.fulfilled", action);
        state.loading = false;
        state.list = action.payload;
      });
  },
});

// Export of actions
export const { setTitle, clearTitle } = repoSlice.actions;

// export state
export const selectRepos = (state) => state.repositories;

// export a reducer
export default repoSlice.reducer;

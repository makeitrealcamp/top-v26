import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllNotes } from "../../services/notes";

const initialState = {
 notes: [],
 loading: false,
 error: false
};

export const getNotesAsync = createAsyncThunk(
  "notes/getNotes",
  async () => {
    const data = await getAllNotes();
    return data;
  }
);

const repoSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    anyAction: (state, action) => {
     // state.any = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNotesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      });
  },
});

// Export of actions
export const { anyAction } = repoSlice.actions;

// export state
export const selectRepos = (state) => state.repositories;

// export a reducer
export default repoSlice.reducer;

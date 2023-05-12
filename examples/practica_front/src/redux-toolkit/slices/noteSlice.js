import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllNotes,
  deleteOneNote,
  updateOneNote,
} from "../../services/notes";

const initialState = {
  notes: [],
  loading: false,
  error: false,
};

/** TODO:  apply token and get all notes, delete fake data*/
export const getNotesAsync = createAsyncThunk(
  "notes/getNotes",
  async (params, thunkAPI) => {
    const { token } = thunkAPI.getState().user;
    const data = await getAllNotes();

    console.log("[noteReducer]: getNotesAsync", token);

    const fakeDate = [
      { id: 1, description: "note fake 1" },
      { id: 1, description: "note fake 2" },
      { id: 1, description: "note fake 3" },
    ];
    return fakeDate;
  }
);

/** TODO: apply token and delete note like above*/
export const deleteOneNoteAsync = createAsyncThunk(
  "notes/deleteNote",
  async (id) => {
    const data = await deleteOneNote(id);
    return data;
  }
);

/** TODO: apply token and update note like above*/
export const updateOneNoteAsync = createAsyncThunk(
  "notes/updateNote",
  async (note) => {
    const data = await updateOneNote();
    return data;
  }
);

const repoSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    anyAction: (state, action) => {
      // state.any = action.payload;
    },
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
    /**TODO: implement cases to more async actions */
  },
});

// Export of actions
export const { anyAction } = repoSlice.actions;

// export state
export const selectNoteState = (state) => state.notes;

// export a reducer
export default repoSlice.reducer;

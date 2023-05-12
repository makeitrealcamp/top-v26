import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, authUser } from "../../services/user";

const initialState = {
  user: {},
  userRegistered: false,
  token: "",
  loading: false,
  error: false,
};

export const registerUserAsync = createAsyncThunk(
  "user/register",
  async (user) => {
    const data = await registerUser(user);
    return data;
  }
);

export const authUserAsync = createAsyncThunk("user/auth", async (user) => {
  const data = await authUser(user);
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    anyAction: (state, action) => {
      // state.any = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload;
      })
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.userRegistered = action.payload;
      });
  },
});

// Export of actions
export const { anyAction } = userSlice.actions;

// export state
export const selectUserState = (state) => state.user;

// export a reducer
export default userSlice.reducer;

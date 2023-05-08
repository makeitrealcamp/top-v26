import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllBikes } from "../../services/bike";
import type { RootState } from "../store";
import { BikeItem } from "../../types";

interface BikeState {
  bikeList: Array<BikeItem>;
  currentBike: object;
  error: boolean;
  loading: boolean;
}

const initialState: BikeState = {
  bikeList: [],
  currentBike: {},
  error: false,
  loading: true,
};

export const getBikeList = createAsyncThunk("bike/getAll", async () => {
  const data = await getAllBikes();
  return data;
});

export const BikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    getOneBike: (state, { payload }) => {
      const bakeList = JSON.parse(JSON.stringify(state.bikeList));
      const currentBike = bakeList.filter(
        (item: BikeItem) => item.id === payload
      );
      state.currentBike = (currentBike.length === 1 && currentBike[0]) || {};
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getBikeList.fulfilled, (state, { payload }) => {
      state.bikeList = payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getBikeList.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getBikeList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { getOneBike } = BikeSlice.actions;

export const selectBikeState = (state: RootState) => state.bike;

export default BikeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getPopularHouses } from "./popularHousesThunk";
import type { PopularHouses } from "./type";

interface HousesState {
  popular: PopularHouses[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HousesState = {
  popular: [],
  isLoading: false,
  error: null,
};

export const popularHousesSlice = createSlice({
  name: "popularHouses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularHouses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPopularHouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popular = action.payload;
      })
      .addCase(getPopularHouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Error";
      });
  },
});

export const popularHousesReducer = popularHousesSlice.reducer
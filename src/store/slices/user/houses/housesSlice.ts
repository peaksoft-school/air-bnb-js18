import { createSlice } from "@reduxjs/toolkit";
import { getFilteredHouses } from "./housesThunk";
import type { HousesState } from "./types";

const initialState: HousesState = {
  houses: [],
  totalPages: 1,
  loading: false,
};

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getFilteredHouses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilteredHouses.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.houses = payload.houseResponses;
        state.totalPages = payload.totalPages;
      })
      .addCase(getFilteredHouses.rejected, (state) => {
        state.loading = false;
      });
  },
});

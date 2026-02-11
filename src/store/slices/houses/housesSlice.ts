import { createSlice } from "@reduxjs/toolkit";
import { fetchHouses } from "./housesThunks";
import type { HousesState } from "./types";

const initialState: HousesState = {
  houses: [],
  loading: false,
};

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.loading = false;
        state.houses.splice(0, state.houses.length, ...action.payload);
      })
      .addCase(fetchHouses.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default housesSlice.reducer;

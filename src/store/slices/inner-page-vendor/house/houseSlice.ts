import { createSlice } from "@reduxjs/toolkit";
import { getHouse } from "./houseThunk";
import type { HouseState } from "./types";

const initialState: HouseState = {
  house: null,
  loading: false,
  error: null,
  success: false,
};

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    resetHouseState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.house = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHouse.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHouse.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.house = action.payload;
      })
      .addCase(getHouse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });
  },
});

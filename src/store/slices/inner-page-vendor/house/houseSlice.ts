import { createSlice } from "@reduxjs/toolkit";
import { deleteHouse, getHouse, updateHouse } from "./houseThunk";
import type { HouseState } from "./types";

const initialState: HouseState = {
  house: null,
  loading: false,
  loadingDelete: false,
  loadingUpdate: false,
  error: null,
  success: false,
};

export const housesVendorSlice = createSlice({
  name: "housesVendor",
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
      })
      .addCase(deleteHouse.pending, (state) => {
        state.loadingDelete = true;
      })
      .addCase(deleteHouse.fulfilled, (state) => {
        state.loadingDelete = false;
        state.house = null;
      })
      .addCase(deleteHouse.rejected, (state, action) => {
        state.loadingDelete = false;
        state.error = action.payload ?? "Error";
      })
      .addCase(updateHouse.pending, (state) => {
        state.loadingUpdate = true;
      })
      .addCase(updateHouse.fulfilled, (state) => {
        state.loadingUpdate = false;
      })
      .addCase(updateHouse.rejected, (state, action) => {
        state.loadingUpdate = false;
        state.error = action.payload ?? "Error";
      });
  },
});

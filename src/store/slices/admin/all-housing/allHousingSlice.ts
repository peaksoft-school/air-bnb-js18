import { createSlice } from "@reduxjs/toolkit";
import {
  acceptCardAllHousing,
  deleteCardAllHousing,
  getAllFilteredHousing,
  rejectCardAllHousing,
} from "./allHousingThunk";
import type { AllHousingState } from "./types";

const initialState: AllHousingState = {
  allHouses: [],
  loading: false,
  error: null,
};

export const allHousingSlice = createSlice({
  name: "allHousing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getAllFilteredHousing
      .addCase(getAllFilteredHousing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFilteredHousing.fulfilled, (state, { payload }) => {
        state.allHouses = payload;
        state.loading = false;
      })
      .addCase(getAllFilteredHousing.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload || "An error occurred";
      })

      // deleteCardAllHousing
      .addCase(deleteCardAllHousing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCardAllHousing.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteCardAllHousing.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload || "An error occurred";
      })

      // acceptCardAllHousing
      .addCase(acceptCardAllHousing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(acceptCardAllHousing.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(acceptCardAllHousing.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload || "An error occurred";
      })

      // rejectCardAllHousing
      .addCase(rejectCardAllHousing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rejectCardAllHousing.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(rejectCardAllHousing.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload || "An error occurred";
      });
  },
});

export default allHousingSlice.reducer;

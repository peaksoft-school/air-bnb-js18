import { createSlice } from "@reduxjs/toolkit";
import type { InnerApplicationState } from "./types";
import {
  approveInnerApplication,
  getInnerApplication,
  rejectInnerApplication,
} from "./innerApplicationThunk";

const initialState: InnerApplicationState = {
  data: null,
  isLoading: false,
  error: null,
};

export const innerApplicationSlice = createSlice({
  name: "innerApplication",
  initialState,
  reducers: {
    clearInnerApplication: (state) => {
      state.data = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getInnerApplication.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getInnerApplication.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(getInnerApplication.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(approveInnerApplication.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(approveInnerApplication.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(approveInnerApplication.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(rejectInnerApplication.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(rejectInnerApplication.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(rejectInnerApplication.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearInnerApplication } = innerApplicationSlice.actions;
export const innerApplicationReducer = innerApplicationSlice.reducer;

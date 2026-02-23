import { createSlice } from "@reduxjs/toolkit";
import {
  acceptCardApplication,
  deleteCardApplication,
  getAllApplication,
  rejectCardApplication,
} from "./applicationThunk";
import type { ApplicationState } from "./types";

const initialState: ApplicationState = {
  houses: [],
  currentPage: 1,
  pageSize: 18,
  totalPages: 1,
  isLoading: false,
  error: null,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllApplication.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllApplication.fulfilled, (state, { payload }) => {
        state.houses = payload.houseResponses;
        state.currentPage = payload.currentPage;
        state.pageSize = payload.pageSize;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getAllApplication.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteCardApplication.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteCardApplication.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCardApplication.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(acceptCardApplication.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(acceptCardApplication.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(acceptCardApplication.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(rejectCardApplication.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(rejectCardApplication.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(rejectCardApplication.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

import { createSlice } from "@reduxjs/toolkit";
import type { AnnouncementsState } from "./types";
import { fetchAnnouncementsUser } from "./userAnnouncementsThunk";

const initialState: AnnouncementsState = {
  data: [],
  isLoading: false,
  error: null,
};

export const announcementsUserSlice = createSlice({
  name: "announcementsUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncementsUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncementsUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = Array.isArray(action.payload) ? action.payload : [];
      })

      .addCase(fetchAnnouncementsUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

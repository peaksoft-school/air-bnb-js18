import { createSlice } from "@reduxjs/toolkit";
import type { AnnouncementsState } from "./types";
import { getUserAnnouncements } from "./announcementsThunk";

const initialState: AnnouncementsState = {
  announcements: [],
  isLoading: false,
  error: null,
};

export const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUserAnnouncements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.announcements = action.payload;
      })
      .addCase(getUserAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

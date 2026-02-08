import { createSlice } from "@reduxjs/toolkit";
import type { AnnouncementsState } from "./types";
import { fetchAnnouncements } from "./announcementsThunk";

const initialState: AnnouncementsState = {
  data: [],
  isLoading: false,
  error: null,
};

const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

export const announcementsReducer = announcementsSlice.reducer;
export const announcementsName = announcementsSlice.name;
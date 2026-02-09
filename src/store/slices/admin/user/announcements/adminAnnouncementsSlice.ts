import { createSlice } from "@reduxjs/toolkit";
import type { AnnouncementsState } from "./types";
import { fetchAdminAnnouncements } from "./adminAnnouncementsThunk";

const initialState: AnnouncementsState = {
  data: [],
  isLoading: false,
  error: null,
};

const adminAnnouncementsSlice = createSlice({
  name: "adminAnnouncements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminAnnouncements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdminAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

export const announcementsReducer = adminAnnouncementsSlice.reducer;
export const announcementsName = adminAnnouncementsSlice.name;
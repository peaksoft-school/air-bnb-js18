import { createSlice } from "@reduxjs/toolkit";
import {
  getUserAnnouncements,
  blockAllUserHouses,
  blockedHouses,
  deleteHouse,
} from "./announcementsThunk";
import type { AnnouncementsState } from "./types";

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
      })
      .addCase(blockAllUserHouses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(blockAllUserHouses.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(blockAllUserHouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      })
      .addCase(blockedHouses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(blockedHouses.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(blockedHouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      })
      .addCase(deleteHouse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteHouse.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteHouse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

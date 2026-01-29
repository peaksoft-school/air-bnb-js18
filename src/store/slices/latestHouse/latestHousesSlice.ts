import { createSlice } from "@reduxjs/toolkit";
import type { LatestAnnouncement } from "./type";
import { getLatestAnnouncements } from "./latestHousesThunk";


interface LatestAnnouncementsState {
  latest: LatestAnnouncement[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LatestAnnouncementsState = {
  latest: [],
  isLoading: false,
  error: null,
};

export const latestAnnouncementsSlice = createSlice({
  name: "latestAnnouncements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLatestAnnouncements.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getLatestAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.latest = action.payload;
      })
      .addCase(getLatestAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Error";
      });
  },
});

export const latestAnnouncementsReducer = latestAnnouncementsSlice.reducer;

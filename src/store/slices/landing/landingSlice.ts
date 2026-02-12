import { createSlice } from "@reduxjs/toolkit";
import {
  getLatestAnnouncements,
  getPopularApartments,
  getPopularHouses,
} from "./landingThunk";
import type { LandingState } from "./types";

const initialState: LandingState = {
  latestAnnouncement: null,
  popularHouse: null,
  popularApartment: null,
  isLoadingPopularApartment: false,
  isLoadingLatestAnnouncement: false,
  isLoading: false,
  error: null,
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // latest announcements
      .addCase(getLatestAnnouncements.pending, (state) => {
        state.isLoadingLatestAnnouncement = true;
        state.error = null;
      })
      .addCase(getLatestAnnouncements.fulfilled, (state, { payload }) => {
        state.isLoadingLatestAnnouncement = false;
        state.latestAnnouncement = payload;
      })
      .addCase(getLatestAnnouncements.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Error";
      })

      // popular apartments
      .addCase(getPopularApartments.pending, (state) => {
        state.isLoadingPopularApartment = true;
        state.error = null;
      })
      .addCase(getPopularApartments.fulfilled, (state, { payload }) => {
        state.isLoadingPopularApartment = false;
        state.popularApartment = payload;
      })
      .addCase(getPopularApartments.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Error";
      })

      //popular house
      .addCase(getPopularHouses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPopularHouses.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.popularHouse = payload;
      })
      .addCase(getPopularHouses.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Error";
      });
  },
});

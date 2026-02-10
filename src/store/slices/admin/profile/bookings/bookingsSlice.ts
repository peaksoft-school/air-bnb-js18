import { createSlice } from "@reduxjs/toolkit";
import { getUserBooking } from "./bookingsThunk";
import type { BookingsState } from "./type";

const initialState: BookingsState = {
  bookings: [],
  isLoading: false,
  error: null,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = action.payload;
      })
      .addCase(getUserBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

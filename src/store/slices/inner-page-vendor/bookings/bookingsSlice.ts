import { createSlice } from "@reduxjs/toolkit";
import type { BookingState } from "./types";
import { getBookingsByHouseId } from "./bookingsThunk";


const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    resetBookingsState: (state) => {
      state.bookings = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsByHouseId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookingsByHouseId.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(getBookingsByHouseId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });
  },
});

export const { resetBookingsState } = bookingsSlice.actions;
export default bookingsSlice.reducer;
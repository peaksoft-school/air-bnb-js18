import { createSlice } from "@reduxjs/toolkit";
import { fetchBookings } from "./bookingsThunk";
import type { BookingsState } from "./type";

const initialState: BookingsState = {
  data: [],
  isLoading: false,
  error: null,
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

export const bookingsReducer = bookingsSlice.reducer;
export const bookingsName = bookingsSlice.name;
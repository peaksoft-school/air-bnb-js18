import { createSlice } from "@reduxjs/toolkit";
import { fetchAdminBookings } from "./adminBookingsThunk";
import type { BookingsState } from "./type";

const initialState: BookingsState = {
  data: [],
  isLoading: false,
  error: null,
};

const adminBookingsSlice = createSlice({
  name: "adminBookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdminBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(
        fetchAdminBookings.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message || "Error";
        },
      );
  },
});

export const bookingsReducer = adminBookingsSlice.reducer;
export const bookingsName = adminBookingsSlice.name;
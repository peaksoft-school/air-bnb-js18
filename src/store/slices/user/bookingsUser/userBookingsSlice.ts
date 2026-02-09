import { createSlice } from "@reduxjs/toolkit";
import { fetchBookingsUser } from "./userBokingsThunk";
import type { BookingsState } from "./types";

const initialState: BookingsState = {
  data: [],
  isLoading: false,
  error: null,
};

const bookingsUserSlice = createSlice({
  name: "bookingsUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingsUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
    .addCase(fetchBookingsUser.fulfilled, (state, action) => {
  state.isLoading = false;
  state.data = Array.isArray(action.payload)
    ? action.payload
    : [];
})

      .addCase(fetchBookingsUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error";
      });
  },
});

export const bookingsUserReducer = bookingsUserSlice.reducer;
export const bookingsUserName = bookingsUserSlice.name;

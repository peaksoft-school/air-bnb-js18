import { createSlice } from "@reduxjs/toolkit";
import { getPopularApartments } from "./popularApartmentsThunk";
import type { PopularApartment } from "./type";

interface ApartmentsState {
  popular: PopularApartment[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ApartmentsState = {
  popular: [],
  isLoading: false,
  error: null,
};

export const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPopularApartments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPopularApartments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popular = action.payload;
      })
      .addCase(getPopularApartments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Error";
      });
  },
});

export const apartmentsReducer = apartmentsSlice.reducer;

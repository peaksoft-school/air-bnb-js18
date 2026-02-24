import { createSlice } from "@reduxjs/toolkit";
import type { FavoritesState } from "./types";
import { getFavorites } from "./favoritesThunk";

const initialState: FavoritesState = {
  favorites: [],
  loading: false,
  error: null,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });
  },
});

export default favoritesSlice.reducer;
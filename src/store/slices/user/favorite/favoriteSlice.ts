import { createSlice } from "@reduxjs/toolkit";
import { getAllFavorites, toggleFavorite } from "./favoriteThunk";
import type { FavoriteState } from "./type";

const initialState: FavoriteState = {
  favorite: [],
  isLoading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorite = action.payload;
      })
      .addCase(getAllFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Error";
      })
      .addCase(toggleFavorite.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleFavorite.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

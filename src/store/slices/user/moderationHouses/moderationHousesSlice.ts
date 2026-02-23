import { createSlice } from "@reduxjs/toolkit";
import { getModerationHouses } from "./moderationHousesThunk";
import { initialState } from "./types";

export const moderationHousesSlice = createSlice({
  name: "moderation",
  initialState,
  reducers: {
    resetModerationHousesState: (state) => {
      state.data = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getModerationHouses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getModerationHouses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getModerationHouses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Error";
      });
  },
});

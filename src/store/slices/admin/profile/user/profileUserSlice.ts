import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "./types";
import { getUser } from "./profileUserThunk";

const initialState: UserState = {
  user: {},
  isLoading: false,
};

export const profileUserSlice = createSlice({
  name: "profile-user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

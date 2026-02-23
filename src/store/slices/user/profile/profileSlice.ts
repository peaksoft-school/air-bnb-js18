import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "./profileThunk";
import type { UserState } from "../type";

const initialState: UserState = {
  name: null,
  image: null,
  email: null,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearUserInfo: (state) => {
      state.email = null;
      state.image = null;
      state.isLoading = false;
      state.name = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.image = payload.image;
        state.email = payload.email;
        state.isLoading = false;
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const USER_ACTIONS = profileSlice.actions;

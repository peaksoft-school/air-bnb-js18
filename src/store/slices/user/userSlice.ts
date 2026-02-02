import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./userThunk";

interface UserState {
  image: string | null;
  name: string | null;
  email: string | null;
  isLoading: boolean;
}

const initialState: UserState = {
  image: null,
  name: null,
  email: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.image = null;
      state.name = null;
      state.email = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.image = payload.image;
        state.name = payload.name;
        state.email = payload.email;
      })
      .addCase(getProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { clearUser } = userSlice.actions;

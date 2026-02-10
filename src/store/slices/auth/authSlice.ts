import { createSlice } from "@reduxjs/toolkit";
import { authWithGoogleRequest, signIn } from "./authThunk";
import type { AuthState } from "./types";

const initialState: AuthState = {
  isAuth: false,
  role: "GUEST",
  email: null,
  isLoading: false,
  error: null,
  accessToken: null,
  image: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.role = "GUEST";
      state.email = null;
      state.accessToken = null;
      state.error = null;
      state.isLoading = false;

      localStorage.removeItem("AIR-BNB");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(signIn.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.isLoading = false;
        state.isAuth = true;
        state.email = payload.email;
        state.role = payload.role;
        state.accessToken = payload.accessToken;
        state.image = payload.image;
      })

      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Failed to sign in";
      })

      .addCase(authWithGoogleRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(authWithGoogleRequest.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.email = payload.email;
        state.role = payload.role;
        state.accessToken = payload.accessToken;
        state.image = payload.image;
      })

      .addCase(authWithGoogleRequest.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Google auth failed";
      });
  },
});

export const { logout } = authSlice.actions;

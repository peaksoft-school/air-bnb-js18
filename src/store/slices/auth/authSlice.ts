import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./autThunk";
import { authWithGoogleRequest } from "./autThunk";

interface AuthState {
  isAuth: boolean;
  role: "GUEST" | "USER" | "ADMIN";
  email: string | null;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuth: false,
  role: "GUEST",
  email: null,
  isLoading: false,
  error: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.role = "GUEST";
      state.email = null;
      state.token = null;
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
        state.isLoading = false;
        state.isAuth = true;
        state.email = payload.email;
        state.role = payload.role;
        state.token = payload.token;
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
        state.token = payload.token;
      })
      .addCase(authWithGoogleRequest.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload || "Google auth failed";
      });
  },
});

export const { logout } = authSlice.actions;

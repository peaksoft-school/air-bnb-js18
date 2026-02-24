import { createSlice } from "@reduxjs/toolkit";
import { deleteUserById, getAllUsers } from "./usersThunks";
import type { UsersState } from "./types";

const initialState: UsersState = {
  users: [],
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserById.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteUserById.rejected, (state) => {
        state.loading = false;
      });
  },
});

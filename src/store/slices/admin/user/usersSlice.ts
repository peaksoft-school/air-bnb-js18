import { createSlice } from "@reduxjs/toolkit";
import { deleteUserById, getAllUsers } from "./usersThunks";
import type { UsersState } from "./types";

const initialState: UsersState = {
  list: [],
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
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUserById.rejected, (state) => {
        state.loading = false;
      });
  },
});

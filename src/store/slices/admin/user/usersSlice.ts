import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, deleteUserById } from "./usersThunks";

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: number;
  announcements: number;
}

interface UsersState {
  list: User[];
  loading: boolean;
}

const initialState: UsersState = {
  list: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload);
      });
  },
});

export default usersSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../configs/admin/users/axiosInstance";
import type { User } from "./usersSlice";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const res = await axiosInstance.get<User[]>("/users");
    return res.data;
  }
);

export const deleteUserById = createAsyncThunk<string, string>(
  "users/deleteUser",
  async (id) => {
    await axiosInstance.delete(`/users/${id}`);
    return id;
  }
);

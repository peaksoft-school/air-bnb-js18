import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../configs/admin/users/axiosInstance";
import type { User } from "./types";

export const getAllUsers = createAsyncThunk<User[]>(
  "users/getAllUsers",

  async () => {
    const res = await axiosInstance.get<User[]>("/api/admin/users");
    return res.data;
  },
);

export const deleteUserById = createAsyncThunk<string, string>(
  "users/deleteUser",

  async (id) => {
    await axiosInstance.delete(`/api/users/${id}`);
    return id;
  },
);

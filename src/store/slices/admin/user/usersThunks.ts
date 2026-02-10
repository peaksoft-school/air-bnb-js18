import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "./types";
import { axiosInstance } from "@/configs/axiosInstance";
import { showToast } from "@/utils/helpers/showToast";
import axios from "axios";

export const getAllUsers = createAsyncThunk<User[]>(
  "users/getAllUsers",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<User[]>("/api/admin/users");

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Users failed",
          type: "error",
        });
      }

      return rejectWithValue("Login error");
    }
  },
);

export const deleteUserById = createAsyncThunk<void, string>(
  "users/deleteUser",

  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/api/users/${id}`);

      const message = data.message;

      return showToast({ title: "Delete:", message });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Delete failed",
          type: "error",
        });
      }

      return rejectWithValue("Login error");
    }
  },
);

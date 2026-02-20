import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../../../configs/axiosInstance";
import { showToast } from "@/utils/helpers/showToast";
import type {
  GetInnerApplicationArgs,
  InnerApplication,
  RejectInnerApplicationArgs,
} from "./types";

export const getInnerApplication = createAsyncThunk<
  InnerApplication,
  GetInnerApplicationArgs
>(
  "innerApplication/getInnerApplication",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<InnerApplication>(
        `/api/houses/${id}`,
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Failed to get house",
          type: "error",
        });
      }
      return rejectWithValue("Failed to get house");
    }
  },
);

export const approveInnerApplication = createAsyncThunk<void, { id: number }>(
  "innerApplication/approveInnerApplication",
  async ({ id }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/admin/accepted-application/${id}?value=APPROVE`,
      );

      showToast({
        title: "Success",
        message: "Card is successfully accepted :)",
        type: "success",
      });

      dispatch(getInnerApplication({ id }));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: "Failed to accept card :(",
          type: "error",
        });
      }
      return rejectWithValue(error);
    }
  },
);

export const rejectInnerApplication = createAsyncThunk<
  void,
  RejectInnerApplicationArgs
>(
  "innerApplication/rejectInnerApplication",
  async ({ id, message }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/admin/accepted-application/${id}?value=REJECT&messageFromAdminToUser=${message}`,
      );

      showToast({
        title: "Success",
        message: "Card is successfully rejected :)",
        type: "success",
      });

      dispatch(getInnerApplication({ id }));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: "Failed to reject card :(",
          type: "error",
        });
      }
      return rejectWithValue(error);
    }
  },
);

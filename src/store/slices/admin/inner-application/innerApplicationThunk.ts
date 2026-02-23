import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../../../configs/axiosInstance";
import { showToast } from "@/utils/helpers/showToast";
import type {
  GetInnerApplicationArgs,
  InnerApplication,
  RejectInnerApplicationArgs,
} from "./types";
import { ADMIN_ROUTES } from "@/utils/constants/routes";
import { getAllApplication } from "../application/applicationThunk";

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

export const approveInnerApplication = createAsyncThunk<
  void,
  { id: number; navigate: (path: string) => void }
>(
  "innerApplication/approveInnerApplication",
  async ({ id, navigate }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/admin/accepted-application/${id}?value=APPROVE`,
      );

      showToast({
        title: "Success",
        message: "Card is successfully accepted :)",
        type: "success",
      });

      navigate(ADMIN_ROUTES.application);

      dispatch(getAllApplication({ currentPage: 1, pageSize: 18 }));
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
  async ({ id, message, navigate }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/admin/accepted-application/${id}?value=REJECT&messageFromAdminToUser=${encodeURIComponent(
          message,
        )}`,
      );

      showToast({
        title: "Success",
        message: "Card is successfully rejected :)",
        type: "success",
      });

      navigate(ADMIN_ROUTES.application);

      dispatch(getAllApplication({ currentPage: 1, pageSize: 18 }));
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

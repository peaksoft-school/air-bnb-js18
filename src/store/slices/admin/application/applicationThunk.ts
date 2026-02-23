import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../configs/axiosInstance";
import axios from "axios";
import { showToast } from "@/utils/helpers/showToast";
import type {
  GetAllApplicationArgs,
  GetAllApplicationResponse,
  RejectApplicationArgs,
} from "./types";

export const getAllApplication = createAsyncThunk<
  GetAllApplicationResponse,
  GetAllApplicationArgs
>(
  "application/getAllApplication",

  async ({ currentPage, pageSize }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<GetAllApplicationResponse>(
        `/api/admin/applications?currentPage=${currentPage}&pageSize=${pageSize}`,
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Application failed",
          type: "error",
        });
      }

      return rejectWithValue("Application error");
    }
  },
);

export const deleteCardApplication = createAsyncThunk<
  void,
  { id: number | string; getData: GetAllApplicationArgs }
>(
  "application/deleteApplication",

  async ({ id, getData }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/api/houses/${id}`);

      showToast({
        title: "Success",
        message: "Card is successfully deleted :)",
        type: "success",
      });

      dispatch(getAllApplication(getData));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: "Failed to delete card :(",
          type: "error",
        });
      }

      return rejectWithValue(error);
    }
  },
);

export const acceptCardApplication = createAsyncThunk<
  void,
  { id: number | string; getData: GetAllApplicationArgs }
>(
  "application/acceptCardApplication",

  async ({ id, getData }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/admin/accepted-application/${id}?value=APPROVE`,
      );

      showToast({
        title: "Success",
        message: "Card is successfully accepted :)",
        type: "success",
      });

      dispatch(getAllApplication(getData));
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

export const rejectCardApplication = createAsyncThunk<
  void,
  RejectApplicationArgs
>(
  "application/rejectCardApplication",

  async ({ houseId, massage, getData }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/admin/accepted-application/${houseId}?value=REJECT&messageFromAdminToUser=${massage}`,
      );

      showToast({
        title: "Success",
        message: "Card is successfully rejected :)",
        type: "success",
      });

      dispatch(getAllApplication(getData));
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

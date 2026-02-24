import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/configs/axiosInstance";
import type {
  AcceptCardParams,
  ApiError,
  DeleteCardParams,
  FilterParams,
  House,
  RejectCardParams,
} from "./types";
import { showToast } from "@/utils/helpers/showToast";

export const getAllFilteredHousing = createAsyncThunk<
  House[],
  FilterParams,
  { rejectValue: string }
>(
  "allHousing/getFilteredHousing",

  async ({ status, houseType, rating, price }, { rejectWithValue }) => {
    try {
      const params: Partial<FilterParams> = {};

      if (status !== "All") {
        params.status = status;
      }

      if (houseType !== "All") {
        params.houseType = houseType;
      }

      if (rating !== "All") {
        params.rating = rating;
      }

      if (price !== "All") {
        params.price = price;
      }

      const response = await axiosInstance.get<House[]>(
        `/api/admin/house-filter`,
        {
          params,
        },
      );

      return response.data;
    } catch (error) {
      const apiError = error as ApiError;

      return rejectWithValue(
        apiError.response?.data?.message ||
          apiError.message ||
          "An error occurred",
      );
    }
  },
);

export const deleteCardAllHousing = createAsyncThunk<
  void,
  DeleteCardParams,
  { rejectValue: string }
>(
  "allHousing/deleteCardAllHousing",

  async ({ id, getData }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/api/houses/${id}`);

      showToast({
        title: "Success",
        message: "Card is successfully deleted :)",
        type: "success",
      });

      await dispatch(getAllFilteredHousing(getData));
    } catch (error) {
      showToast({
        title: "Error",
        message: "An error occurred while deleting the card :(",
        type: "error",
      });

      const apiError = error as ApiError;

      return rejectWithValue(
        apiError.response?.data?.message ||
          apiError.message ||
          "An error occurred",
      );
    }
  },
);

export const acceptCardAllHousing = createAsyncThunk<
  void,
  AcceptCardParams,
  { rejectValue: string }
>(
  "allHousing/acceptCardallHousing",

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

      await dispatch(getAllFilteredHousing(getData));
    } catch (error) {
      showToast({
        title: "Error",
        message: "An error occurred while accepting the card :(",
        type: "error",
      });

      const apiError = error as ApiError;

      return rejectWithValue(
        apiError.response?.data?.message ||
          apiError.message ||
          "An error occurred",
      );
    }
  },
);

export const rejectCardAllHousing = createAsyncThunk<
  void,
  RejectCardParams,
  { rejectValue: string }
>(
  "allHousing/rejectCardallHousing",

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

      await dispatch(getAllFilteredHousing(getData));
    } catch (error) {
      showToast({
        title: "Error",
        message: "An error occurred while rejecting the card :(",
        type: "error",
      });

      const apiError = error as ApiError;

      return rejectWithValue(
        apiError.response?.data?.message ||
          apiError.message ||
          "An error occurred",
      );
    }
  },
);

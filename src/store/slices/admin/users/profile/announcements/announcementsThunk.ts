import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  Announcement,
  BlockAllUserHousesArgs,
  BlockedHousesArgs,
  DeleteHouseArgs,
} from "./types";
import { showToast } from "@/utils/helpers/showToast";
import { axiosInstance } from "@/configs/axiosInstance";

export const getUserAnnouncements = createAsyncThunk<
  Announcement[],
  string | undefined
>(
  "announcements/fetchAnnouncements",

  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/admin/announcements/${userId}`,
      );

      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showToast({
          title: "Error",
          message: error.response?.data?.message || "Announcements failed",
          type: "error",
        });
      }

      return rejectWithValue("Announcements error");
    }
  },
);

export const blockedHouses = createAsyncThunk<void, BlockedHousesArgs>(
  "announcements/blockedHouses",
  async ({ id, block }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post(
        `api/houses/blockedHousesById?houseId=${id}&blockOrUnblock=${block}`,
      );

      showToast({
        title: "Block",
        message: data.message,
        type: "booked",
      });

      dispatch(getUserAnnouncements(String(id)));
    } catch (error: unknown) {
      const err = error as { response?: { message?: string } };

      showToast({
        title: "Block",
        message: err.response?.message ?? "Something went wrong",
        type: "error",
      });

      return rejectWithValue(err.response?.message);
    }
  },
);

export const deleteHouse = createAsyncThunk<void, DeleteHouseArgs>(
  "announcements/deleteHouse",
  async ({ id, navigate }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`api/houses/${id}`);

      navigate?.(-1);

      showToast({
        title: "Delete",
        message: "Successfully deleted",
        type: "success",
      });

      dispatch(getUserAnnouncements(String(id)));
    } catch (error: unknown) {
      const err = error as { response?: { message?: string } };

      showToast({
        title: "Delete",
        message: err.response?.message ?? "Something went wrong",
        type: "error",
      });

      return rejectWithValue(err.response?.message);
    }
  },
);

export const blockAllUserHouses = createAsyncThunk<
  void,
  BlockAllUserHousesArgs
>(
  "announcements/blockAllUserHouses",
  async ({ userId }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post(
        `api/houses/blockAllAds/${userId}`,
      );

      showToast({
        title: "Block all house",
        message: response.data.message,
        type: "booked",
      });

      dispatch(getUserAnnouncements(userId));
    } catch (error: unknown) {
      const err = error as { response?: { message?: string } };

      showToast({
        title: "Block all house",
        message: err.response?.message ?? "Something went wrong",
        type: "error",
      });

      return rejectWithValue(err.response?.message);
    }
  },
);

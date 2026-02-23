import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiError, FilterParams, GetFilteredResponse } from "./types";
import { axiosInstance } from "@/configs/axiosInstance";

export const getFilteredHouses = createAsyncThunk<
  GetFilteredResponse,
  FilterParams,
  { rejectValue: string }
>(
  "houses/getFilteredHouses",

  async (
    { region, houseType, popular, rating, price, currentPage, pageSize },
    { rejectWithValue },
  ) => {
    try {
      const params: Record<string, string | number> = {
        currentPage,
        pageSize,
      };

      if (region && region !== "All") {
        params.region = region;
      }
      if (houseType && houseType !== "All") {
        params.houseType = houseType;
      }
      if (popular && popular !== "All") {
        params.popular = popular;
      }
      if (rating && rating !== "All") {
        params.rating = rating;
      }
      if (price && price !== "All") {
        params.price = price;
      }

      const response = await axiosInstance.get<GetFilteredResponse>(
        "/api/houses/filtered",
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

export const toggleFilteredFavorite = createAsyncThunk<
  void,
  FilterParams,
  { rejectValue: string }
>(
  "favorite/toggle",

  async (
    { region, houseType, popular, rating, price, currentPage, pageSize, id },
    { rejectWithValue, dispatch },
  ) => {
    try {
      await axiosInstance.post(`/api/favorites/${id}`);

      await dispatch(
        getFilteredHouses({
          region,
          houseType,
          popular,
          rating,
          price,
          currentPage,
          pageSize,
        }),
      );
    } catch {
      return rejectWithValue("Failed to toggle favorite");
    }
  },
);

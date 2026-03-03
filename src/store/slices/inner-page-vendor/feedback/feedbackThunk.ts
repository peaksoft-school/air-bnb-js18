import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  Feedback,
  FeedbackRatings,
  NewFeedback,
  ReactionPayload,
} from "./types";
import { axiosInstance } from "@/configs/axiosInstance";

export const getFeedbacksByHouseId = createAsyncThunk<
  Feedback[],
  number,
  { rejectValue: string }
>("feedbacks/getByHouseId", async (houseId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/api/feedbacks/${houseId}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

export const saveFeedback = createAsyncThunk<
  Feedback,
  NewFeedback,
  { rejectValue: string }
>("feedbacks/save", async (feedbackData, { rejectWithValue, dispatch }) => {
  try {
    const response = await axiosInstance.post(
      `/api/feedbacks?houseId=${feedbackData.houseId}`,
      feedbackData,
    );

    dispatch(getFeedbackRatingsByHouseId(feedbackData.houseId));

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

export const reactToFeedback = createAsyncThunk<
  Feedback,
  ReactionPayload,
  { rejectValue: string }
>("feedbacks/react", async ({ feedbackId, reaction }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/api/feedbacks/reaction", {
      feedbackId,
      reaction,
    });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

export const getFeedbackRatingsByHouseId = createAsyncThunk<
  FeedbackRatings,
  number,
  { rejectValue: string }
>("feedbacks/getRatingsByHouseId", async (houseId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(
      `/api/feedbacks/${houseId}/ratings`,
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error");
  }
});

import { createSlice } from "@reduxjs/toolkit";
import type { FeedbackState, FeedbackRatings } from "./types";
import {
  getFeedbacksByHouseId,
  saveFeedback,
  reactToFeedback,
  getFeedbackRatingsByHouseId,
} from "./feedbackThunk";

interface ExtendedFeedbackState extends FeedbackState {
  ratings: FeedbackRatings | null;
}

const initialState: ExtendedFeedbackState = {
  feedbacks: [],
  loading: false,
  error: null,
  ratings: null,
};

export const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeedbacksByHouseId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFeedbacksByHouseId.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks = action.payload;
      })
      .addCase(getFeedbacksByHouseId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });

    builder
      .addCase(saveFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.feedbacks.push(action.payload);
      })
      .addCase(saveFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });

    builder
      .addCase(reactToFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reactToFeedback.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.feedbacks.findIndex(
          (f) => f.id === action.payload.id,
        );
        if (index !== -1) {
          state.feedbacks[index] = action.payload;
        }
      })
      .addCase(reactToFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });
    builder
      .addCase(getFeedbackRatingsByHouseId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFeedbackRatingsByHouseId.fulfilled, (state, action) => {
        state.loading = false;
        state.ratings = action.payload;
      })
      .addCase(getFeedbackRatingsByHouseId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error";
      });
  },
});

export default feedbacksSlice.reducer;

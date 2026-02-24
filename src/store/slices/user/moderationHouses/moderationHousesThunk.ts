import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CardData } from "@/components/UI/card/types";
import type { ModerationHouse } from "./types";
import { axiosInstance } from "@/configs/axiosInstance";

export const getModerationHouses = createAsyncThunk<
  CardData[],
  void,
  { rejectValue: string }
>("moderation/getHouses", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<ModerationHouse[]>(
      "/api/users/moderation/houses",
    );

    return data as CardData[];
  } catch {
    return rejectWithValue("Failed to load houses");
  }
});

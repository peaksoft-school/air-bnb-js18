import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Announcement } from "./types";

export const fetchAnnouncements = createAsyncThunk<Announcement[], string>(
  "announcements/fetchAnnouncements",
  async (userId) => {
    const response = await axios.get(`/api/admin/announcements/${userId}`);
    return response.data;
  },
);
import axios from "axios";

const BASE_URL = "http://35.156.129.180/api";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

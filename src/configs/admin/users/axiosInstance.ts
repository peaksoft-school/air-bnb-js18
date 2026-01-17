import axios from "axios";

const BASE_URL = "http://18.194.43.178";
console.log("BASE_URL: ", BASE_URL);

export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

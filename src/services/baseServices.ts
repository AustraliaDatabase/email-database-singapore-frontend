import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const REQUEST_TIMEOUT = 40000;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Website: process.env.SITE_PRE_FIX || "",
  },
});

export default instance;

export const instanceAuth = axios.create({
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

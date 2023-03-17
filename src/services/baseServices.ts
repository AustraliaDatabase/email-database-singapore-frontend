import axios from "axios";

export const NEXT_PUBLIC_BASE_URL =  process.env.NEXT_PUBLIC_BACKEND_URL;
const REQUEST_TIMEOUT = 40000;

const instance = axios.create({
  baseURL: NEXT_PUBLIC_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
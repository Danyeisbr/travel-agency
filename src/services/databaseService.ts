import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

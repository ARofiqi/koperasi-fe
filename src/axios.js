import axios from "axios";

// const baseURL = "https://dummyjson.com/";
// const baseURL = "https://gjzddcw2-8000.asse.devtunnels.ms/";
const baseURL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;

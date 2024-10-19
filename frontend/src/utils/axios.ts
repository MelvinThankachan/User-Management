import axios from "axios";
import { clearAuth } from "../redux/authSlice";
import store from "../redux/store";
import { useNavigate } from "react-router-dom"; // Import only if using inside a component

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.dispatch(clearAuth());
          window.location.href = "/login";
          break;
        case 403:
          console.error("Access denied.");
          break;
        case 500:
          console.error("Server error. Please try again later.");
          break;
        default:
          console.error("An error occurred:", error.message);
      }
    } else {
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

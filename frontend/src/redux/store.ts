// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { isTokenExpired } from "../utils/tokenUtils"; // Import the utility function

const loadAuthState = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (isTokenExpired(token)) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return {
      token: null,
      user: null,
    };
  }

  return {
    token: token || null,
    user: user ? JSON.parse(user) : null,
  };
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: loadAuthState(),
  },
});

export default store;

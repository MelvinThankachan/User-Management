import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUserFromLocalStorage } from "./authSlice";
import userReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
  preloadedState: {
    auth: loadUserFromLocalStorage(),
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./usersSlice";

// const loadAuthState = () => {
//   const token = localStorage.getItem("token");
//   const user = localStorage.getItem("user");

//   if (isTokenExpired(token)) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     return {
//       token: null,
//       user: null,
//     };
//   }

//   return {
//     token: token || null,
//     user: user ? JSON.parse(user) : null,
//   };
// };

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
  },
  // preloadedState: {
  //   auth: loadAuthState(),
  // },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("/api/auth/users");
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      console.log(state.users)
    });
  },
});

export const selectUsers = (state: any) => state.users.users;
export const selectLoading = (state: any) => state.users.loading;
export const selectError = (state: any) => state.users.error;

export default userSlice.reducer;

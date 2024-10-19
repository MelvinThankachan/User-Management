import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axiosInstance.get("auth/users");
    console.log("Fetched users:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        console.log("Fetching users...");
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        console.log("Users fetched successfully:", state.users);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.error("Failed to fetch users:", action.error);
      });
  },
});

export default userSlice.reducer;

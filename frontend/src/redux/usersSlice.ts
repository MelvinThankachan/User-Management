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
      // console.log(state.users);
    });
    //   .addCase(fetchUsers.rejected, (state, action) => {
    //     console.log("Error");
    //   })
    //   .addCase(fetchUsers.pending, (state, action) => {
    //     console.log("Pending");
    //   });
  },
});

export const selectUsers = (state: any) => state.users.users;
export default userSlice.reducer;

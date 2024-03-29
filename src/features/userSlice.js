import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    //role: null,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log("logged in");
      state.user = action.payload;
    },
    logout: (state) => {
      console.log("in slice logout");
      state.user = null;
    },
    // getRole: (state, action) => {
    //   state.role = action.payload;
    // },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.counter.user;

export default userSlice.reducer;

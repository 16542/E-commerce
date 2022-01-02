import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;

    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    //GET ALL
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state) => {
      state.isFetching = false;
      state.currentUser.splice(state.currentUser.findIndex((user) => user._id));
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserStart:(state)=>{
      state.isFetching=true;
      state.error=false;
    },
    updateUserSuccess:(state)=>{
      state.isFetching=false;
      state.currentUser={
        
      }
    },
    updateUserFailure:(state)=>{
      state.isFetching=false;
      state.error=true
    }
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getUserFailure,
  getUserSuccess,
  getUserStart,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;
export default userSlice.reducer;

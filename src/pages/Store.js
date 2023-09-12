import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {value: { username: ""} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value ={ value: { username: "" }} ;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
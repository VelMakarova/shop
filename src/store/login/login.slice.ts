import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    login: () => true,
    logout: () => false,
  },
});

export const { login, logout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: '',
  reducers: {
    login: (state, action: PayloadAction<string>) => action.payload,
    logout: () => '',
  },
});

export const { login, logout } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;

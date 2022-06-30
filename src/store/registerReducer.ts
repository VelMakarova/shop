import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initStateType = string[];
const initState: initStateType = [];

const registerSlice = createSlice({
  name: 'register',
  initialState: initState,
  reducers: {
    register: (state, action: PayloadAction<string>) => [...state, action.payload],
  },
});

export const { register } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;

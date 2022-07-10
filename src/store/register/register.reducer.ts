import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initState = '';

const registerSlice = createSlice({
  name: 'register',
  initialState: initState,
  reducers: {
    newRegister: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { newRegister } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;

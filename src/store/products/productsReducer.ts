import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type initStateType = any[];
const initState: initStateType = [];

const productSlice = createSlice({
  name: 'products',
  initialState: initState,
  reducers: {
    getProducts: (state, action) => [...state, action.payload],
  },
});

export const { getProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;

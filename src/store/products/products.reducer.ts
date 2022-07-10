import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types';

const initState: ProductType[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState: initState,
  reducers: {
    getProducts: (state, action) => [...action.payload],
  },
});

export const { getProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;

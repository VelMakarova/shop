import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../types';

const initState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

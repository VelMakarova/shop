import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../types';

const initState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    removeFromCart: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      return state;
    },
    increaseAmount: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].amount++;
      return state;
    },
    decreaseAmount: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].amount--;
      return state;
    },
  },
});

export const { addToCart, removeFromCart, increaseAmount, decreaseAmount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

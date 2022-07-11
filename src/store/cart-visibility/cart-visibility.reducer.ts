import { createSlice } from '@reduxjs/toolkit';

const initState = false;

const cartVisibilitySlice = createSlice({
  name: 'cartVisibility',
  initialState: initState,
  reducers: {
    showCart: () => true,
    hideCart: () => false,
  },
});

export const { showCart, hideCart } = cartVisibilitySlice.actions;
export const cartVisibilityReducer = cartVisibilitySlice.reducer;

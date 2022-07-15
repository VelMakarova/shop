import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types';
import { RootState } from '../index';

const initState: ProductType[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState: initState,
  reducers: {
    getProducts: (state, action) => [...action.payload],
  },
});

export const selectByFilter = (propName?: keyof ProductType, filter?: string) =>
  createSelector(
    (state: RootState) => state.products,
    (products) => {
      if (propName && filter !== '') {
        return products.filter((item: ProductType) => item[propName] === filter);
      }
      return products;
    },
  );

export const { getProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;

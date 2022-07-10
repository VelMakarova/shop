import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initState,
  reducers: {
    setFilters: (state, action: PayloadAction<string>) => action.payload,
  },
});
export const { setFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

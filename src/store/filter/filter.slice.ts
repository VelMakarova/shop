import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActiveFilterType } from '../../types';

const initState: ActiveFilterType = {
  color: [],
  size: [],
  category: 'outerwear',
  gender: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      return state;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
      return state;
    },
    setFilters: (state, action: PayloadAction<{ param: 'color' | 'size'; value: string }>) => {
      const { param, value } = action.payload;
      const i = state[param].indexOf(value);
      if (i >= 0) {
        state[param].splice(i, 1);
      } else {
        state[param].push(value);
      }
      return state;
    },
    clearFilters: (state) => {
      state.size = [];
      state.color = [];
      return state;
    },
  },
});
export const { setFilters, setCategory, setGender, clearFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

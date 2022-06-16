import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    toggleTheme: (state) => {
      if (state === 'light') {
        return 'dark';
      }
      return 'light';
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

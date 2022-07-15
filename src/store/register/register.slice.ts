import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterForm } from '../../types';

const initState: RegisterForm[] = [
  {
    id: '1',
    login: 'qwe@mail.com',
    password: '12345',
    firstName: 'Lala',
    lastName: 'Lala',
  },
];

const registerSlice = createSlice({
  name: 'register',
  initialState: initState,
  reducers: {
    newRegister: (state, action: PayloadAction<RegisterForm>) => {
      if (!state.findIndex((user) => user.login === action.payload.login)) {
        state.push({ ...action.payload });
      }
      return state;
    },
  },
});

export const { newRegister } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;

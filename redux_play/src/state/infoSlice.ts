import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface infoState {
  name: string;
  age: number;
  email: string;
  color: string;
}

const initialState: infoState = {
  name: '',
  age: 0,
  email: '',
  color: 'black',
};

const infoSlice = createSlice({
  name: 'info',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.name = 'Placide';
      state.age = 21;
      state.email = 'imanzikabisa@gmail.com';
    },

    logout: (state) => {
      state.name = '';
      state.age = 0;
      state.email = '';
    },

    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },

    revertColor: (state) => {
      state.color = 'black';
    },
  },
});

export default infoSlice.reducer;
export const { login, logout, changeColor, revertColor } = infoSlice.actions;

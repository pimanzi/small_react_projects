import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './infoSlice';

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

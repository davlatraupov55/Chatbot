import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './reducer';

export const store = configureStore({
  reducer: {
    message: messageSlice
  }
});
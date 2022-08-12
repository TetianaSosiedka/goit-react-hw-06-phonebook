import { configureStore } from '@reduxjs/toolkit';
//import { items } from './itemsSlice';
import filter from './filterSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});

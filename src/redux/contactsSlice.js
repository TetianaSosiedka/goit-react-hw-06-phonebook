import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItems: (state, { payload: itemId }) => {
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
});

export const { addItems, removeItems } = contactsSlice.actions;

export default contactsSlice.reducer;

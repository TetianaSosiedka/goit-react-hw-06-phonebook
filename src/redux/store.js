import { configureStore } from '@reduxjs/toolkit';
import contacts from './contactsSlice';
import filter from './filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'contakts',
  version: 1,
  storage,
};

const persistedContactcReducer = persistReducer(
  persistContactsConfig,
  contacts
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactcReducer,
    filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import contactsPersistReducer from 'redux/contacts/contacts-persist';
import middleware from './middleware';

export const vault = configureStore({
  reducer: { contacts: contactsPersistReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(vault);

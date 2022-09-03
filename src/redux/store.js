import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  contactsReducer,
  loadingReducer,
  filterReducer,
} from './contacts/contacts-reducer';

import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {},
  }),

  logger,
];

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

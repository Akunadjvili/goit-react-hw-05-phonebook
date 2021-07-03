import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as actions from 'redux/contacts/contacts-actions';

const itemsInitial = [];
const items = createReducer(itemsInitial, {
  [actions.addContact]: (state, { payload }) => [...state, payload],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterInitial = '';
const filter = createReducer(filterInitial, {
  [actions.filterContacts]: (_, { payload }) => payload,
});

const notifyInitial = '';
const notify = createReducer(notifyInitial, {
  [actions.showExistNotify]: (state, { payload }) => {
    return { ...state, ...payload };
  },
});

export const contactsReducer = combineReducers({ items, filter, notify });

// export default contactsReducer;

import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';

export const addContact = createAction(types.ADD, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction(types.DELETE);

export const filterContacts = createAction(types.FILTER);

export const showExistNotify = createAction(types.NOTIFY_EXIST);

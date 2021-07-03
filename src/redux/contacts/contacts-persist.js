import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from 'redux/contacts/contacts-reducers';

const persistContactsConfig = {
  key: 'phone-contacts',
  storage,
  blacklist: ['filter', 'notify'],
};

export default persistReducer(persistContactsConfig, contactsReducer);

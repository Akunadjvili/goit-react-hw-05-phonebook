import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import * as store from 'redux/store';

const ReduxStorage = ({ children }) => {
  return (
    <Provider store={store.vault}>
      <PersistGate loading={null} persistor={store.persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxStorage;

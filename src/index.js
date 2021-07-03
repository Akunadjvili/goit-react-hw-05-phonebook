import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import 'common.css';

import ReduxStorage from 'redux/ReduxStorage';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ReduxStorage>
      <App />
    </ReduxStorage>
  </React.StrictMode>,
  document.getElementById('root'),
);

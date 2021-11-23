import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';

import Hooks from 'hooks';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Hooks>
      <App />
    </Hooks>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/components/screen/Root';

import store from './app/store';
import { Provider } from 'react-redux';

import './assets/scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

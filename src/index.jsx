import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Application from './main/component/Application';
import store from './main/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);

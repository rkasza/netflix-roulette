import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/Store';
import App from './App';
import './assets/css/skeleton-css/css/normalize.css';
import './assets/css/skeleton-css/css/skeleton.css';
import './assets/css/skeleton-css/css/custom.css';
ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

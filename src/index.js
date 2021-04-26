import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './store/Store';
import App from './App';
import './assets/css/skeleton-css/css/normalize.css';
import './assets/css/skeleton-css/css/skeleton.css';
import './assets/css/skeleton-css/css/custom.css';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Store>
        <App />
      </Store>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

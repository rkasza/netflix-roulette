import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import store from '../redux/store';
import Menu from './Menu';
import Pages from './Pages';
import '../styles/style.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Menu />
      <Pages />
    </Router>
  </Provider>
);

export default App;
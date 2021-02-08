import React from 'react';
import Img from '../images/notfound.png';
import '../styles/style.css';
import { Provider } from 'react-redux'
import store from '../redux/store';
import Counter from './Counter';
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
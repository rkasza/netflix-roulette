import React from 'react';
import ReactDOM from 'react-dom';
import Img from './notfound.png';
import './style.css';

const App = () => (
  <div>
    <h1 className="red">Hello Worl222dsdasdasdas</h1>
    <img src={Img} />
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
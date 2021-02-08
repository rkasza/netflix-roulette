import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Counter from './Counter';

const Pages = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Pages;

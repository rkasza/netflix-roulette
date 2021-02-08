import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => (
  <div>
    <nav>
      <ul>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/counter">Counter</MenuItem>
      </ul>
    </nav>
  </div>
);

export default Menu;

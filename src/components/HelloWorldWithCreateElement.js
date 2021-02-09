import React from 'react';

const HelloWorldWithCreateElement = ({ el = 'h1', children }) => {
  return React.createElement(
    el,
    { style: { textAlign: 'center' }},
    children
  );
};

export default HelloWorldWithCreateElement;
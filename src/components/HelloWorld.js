import React from 'react';

const HelloWorld = ({ style, children }) => {
  return <h1 style={style}>{children}</h1>;
};

export default HelloWorld;

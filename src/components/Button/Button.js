import React from 'react';
import './Button.css';

const Button = ({ as = 'button', variant, children, className = '', ...htmlAttr }) => {
  if (as === 'button') {
    return <button className={`${variant} ${className}`} {...htmlAttr}>{children}</button>;
  } else if (as === 'input') {
    return <input className={`${variant} ${className}`} {...htmlAttr} value={children} />;
  }
};

//TODO: Add proptypes
export default Button;

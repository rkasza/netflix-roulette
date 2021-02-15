import React from 'react'
const colSizes = {
  '12': 'twelve',
  '9': 'nine',
  '4': 'four',
  '3': 'three',
  '6': 'six'
};
const Col = ({ size, children, className }) => <div className={`${colSizes[size]} columns ${className ? className : ''}`}>{children}</div>;

export default Col;
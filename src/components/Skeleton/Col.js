import React from 'react'
const colSizes = {
  '12': 'twelve',
  '9': 'nine',
  '3': 'three'
}
const Col = ({ size, children, className }) => <div className={`${colSizes[size]} columns${className ? className : ''}`}>{children}</div>;

export default Col;
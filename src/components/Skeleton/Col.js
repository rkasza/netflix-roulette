import React from 'react';
import PropTypes from 'prop-types';

const colSizes = {
  '12': 'twelve',
  '9': 'nine',
  '4': 'four',
  '3': 'three',
  '6': 'six',
  '10': 'ten',
  '2': 'two'
};
const Col = React.forwardRef(({ size, children, className }, ref) => (
  <div ref={ref} className={`${colSizes[size]} columns ${className ? className : ''}`}>{children}</div>
));


Col.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
}

export default Col;
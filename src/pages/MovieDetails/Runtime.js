import React from 'react';
import PropTypes from 'prop-types';

const Runtime = ({ className = '', children }) => <span className={className}>{children} min</span>;

Runtime.propTypes = {
  className:PropTypes.string,
  children: PropTypes.number.isRequired
};

export default Runtime;

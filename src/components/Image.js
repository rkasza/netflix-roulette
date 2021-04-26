import React from 'react';
import PropTypes from 'prop-types';

 const Image = ({ fallback = '/images/placeholder-movieimage.png', ...props }) => {
  const handleOnError = event => event.target.src = fallback;
  return <img {...props} onError={handleOnError} />; //eslint-disable-line
};

Image.propTypes = {
  src: PropTypes.string.isRequired
};

export default Image;

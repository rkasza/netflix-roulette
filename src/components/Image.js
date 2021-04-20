import React from 'react';
import PropTypes from 'prop-types';

 const Image = props => {
  const fallback = 'images/placeholder-movieimage.png';
  const handleOnError = event => event.target.src = fallback;
  return <img {...props} onError={handleOnError} />; //eslint-disable-line
};

Image.propTypes = {
  src: PropTypes.string.isRequired
};

export default Image;

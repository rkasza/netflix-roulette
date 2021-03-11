import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ active, genre, handleSelect }) => (
  <button type="button" className={`${active ? 'active Genre': 'Genre'}`} onClick={() => handleSelect(genre)}>
    {genre}
  </button>
);

Genre.propTypes = {
  active: PropTypes.bool,
  genre: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Genre;

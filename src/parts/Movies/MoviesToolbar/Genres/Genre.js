import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ active, genre, handleGenreChange }) => (
  <button type="button" className={`${active ? 'active Genre': 'Genre'}`} onClick={() => handleGenreChange(genre)}>
    {genre}
  </button>
);

Genre.propTypes = {
  active: PropTypes.bool,
  genre: PropTypes.string.isRequired,
  handleGenreChange: PropTypes.func.isRequired,
};

export default Genre;

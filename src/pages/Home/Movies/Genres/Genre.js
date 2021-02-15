import React from 'react';

const Genre = ({ active, genre, handleSelect }) => (
  <button type="button" className={`${active ? 'active Genre': 'Genre'}`} onClick={() => handleSelect(genre)}>
    {genre}
  </button>
);

export default Genre;

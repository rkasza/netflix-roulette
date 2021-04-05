import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../../components/Skeleton/Row';
import Genres from './Genres/Genres';
import SortBy from './SortBy/SortBy';

const MoviesToolbar = React.memo(({ selectedGenre, sortBy, onGenreChange, onSortByChange }) => (
  <Row className="MoviesToolbar">
    <Genres selected={selectedGenre} handleSelect={onGenreChange} />
    <SortBy value={sortBy} onChange={onSortByChange} />
  </Row>
));

MoviesToolbar.propTypes = {
  selectedGenre: PropTypes.string,
  sortBy: PropTypes.string,
  onGenreChange: PropTypes.func.isRequired,
  onSortByChange: PropTypes.func.isRequired
};

export default MoviesToolbar;
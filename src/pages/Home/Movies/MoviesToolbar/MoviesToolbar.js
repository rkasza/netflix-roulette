import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../../../components/Skeleton/Row';
import Genres from './Genres/Genres';
import SortBy from './SortBy/SortBy';

const MovieListController = ({ selectedGenre, sortBy, onGenreChange, onSortByChange }) => (
  <Row className="ResultController">
    <Genres selected={selectedGenre} handleSelect={onGenreChange} />
    <SortBy value={sortBy} onChange={onSortByChange} />
  </Row>
);

MovieListController.propTypes = {
  selectedGenre: PropTypes.string,
  sortBy: PropTypes.number,
  onGenreChange: PropTypes.func.isRequired,
  onSortByChange: PropTypes.func.isRequired
};

export default MovieListController;
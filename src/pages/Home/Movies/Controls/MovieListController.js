import React from 'react';
import Row from '../../../../components/Skeleton/Row';
import Genres from './Genres/Genres';
import SortBy from './SortBy/SortBy';

const MovieListController = ({ selectedGenre, sortBy, onGenreChange, onSortByChange }) => (
  <Row className="ResultController">
    <Genres selected={selectedGenre} handleSelect={onGenreChange} />
    <SortBy value={sortBy} onChange={onSortByChange} />
  </Row>
);


export default MovieListController;
import React from 'react';
import PropTypes from 'prop-types';
import Col from '../../../../components/Skeleton/Col';
import Genre from './Genre';
import './Genres.css';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

const Genres = ({ selected, onGenreChange }) => (
  <Col size={6} className="GenreWrapper">
    {genres.map(genre => <Genre key={genre} active={selected === genre} genre={genre} handleGenreChange={onGenreChange}/>)}
  </Col>
);

Genres.propTypes = {
  selected: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default Genres;

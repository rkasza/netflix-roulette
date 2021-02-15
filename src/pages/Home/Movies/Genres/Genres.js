import React from 'react';
import Col from '../../../../components/Skeleton/Col';
import Genre from './Genre';
import './Genres.css';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

const Genres = ({ selected, handleSelect }) => (
  <Col size={6} className="GenreWrapper">
    {genres.map(genre => <Genre key={genre} active={selected === genre} genre={genre} handleSelect={handleSelect}/>)}
  </Col>
);

export default Genres;

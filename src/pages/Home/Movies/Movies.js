import React from 'react';
import PropTypes from 'prop-types';
import MoviesToolbar from './MoviesToolbar/MoviesToolbar';
import NoMovieFound from './NoMovieFound';
import './Movies.css';
import Movie from './Movie/Movie';
import Row from '../../../components/Skeleton/Row';
import Col from '../../../components/Skeleton/Col';

const Movies = ({ selectedGenre, sortBy, movies, onGenreChange, onSortByChange }) => (
  <div className="MovieListWrapper">
    <MoviesToolbar selectedGenre={selectedGenre} sortBy={sortBy} onGenreChange={onGenreChange} onSortByChange={onSortByChange}/>
    <Row>
      <Col size={12}>
        <span style={{ fontSize: '20px' }}>{`${movies.length} movies found`}</span>
      </Col>
    </Row>
    <Row className="MovieList">
      {movies.length !== 0 ? movies.map(movie => <Movie key={movie.id} movie={movie} />) : <NoMovieFound />}
    </Row>
  </div>
);

Movies.propTypes = {
  selectedGenre: PropTypes.string,
  sortBy: PropTypes.number,
  onGenreChange: PropTypes.func.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  movies: PropTypes.array
};

export default Movies;

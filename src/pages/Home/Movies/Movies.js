import React from 'react';
import ResultController from './ResultController';
import NoMovieFound from './NoMovieFound';
import './Movies.css';
import moviesJSON from '../../../__mocks__/movies.json'
import Movie from './Movie';
import Row from '../../../components/Skeleton/Row';

const { data: movies } = moviesJSON;

const Movies = () => {
  console.log(movies);
  return (
    <div className="MovieListWrapper">
      <ResultController />
      <Row className="MovieList">
        {movies.map(movie => <Movie key={movie.id} {...movie} />)}
      </Row>
    </div>
  )
}

export default Movies;

import React from 'react';
import ResultController from './ResultController';
import NoMovieFound from './NoMovieFound';
import './Movies.css';

const Movies = () => {
  return (
    <div className="MovieListWrapper">
      <ResultController />
      <NoMovieFound />
    </div>
  )
}

export default Movies;

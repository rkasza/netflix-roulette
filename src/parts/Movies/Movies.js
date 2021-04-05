import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../store/actions/movieActions'
import MoviesToolbar from './MoviesToolbar/MoviesToolbar';
import NoMovieFound from './NoMovieFound';
import './Movies.css';
import Movie from './Movie/Movie';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';

const Movies = ({ viewMovieDetails }) => {
  const movies = useSelector(state => state.movieStore.movies);
  const numberOfResults = useSelector(state => state.movieStore.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getMovies());
  }, [dispatch]);
   
  return (
    <div className="MovieListWrapper">
      <MoviesToolbar/>
      <Row>
        <Col size={12}>
          <span style={{ fontSize: '20px' }}>{`${numberOfResults} movies found`}</span>
        </Col>
      </Row>
      <Row className="MovieList">
        {movies.length !== 0 ? movies.map(movie => <Movie key={movie.id} movie={movie} viewMovieDetails={viewMovieDetails}/>) : <NoMovieFound />}
      </Row>
    </div>
  );
};

export default Movies;

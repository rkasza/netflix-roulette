import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from 'react-router-dom';
import { resetState,  updateMovieParamAndGetMovies } from '../../store/actions/movieActions'
import MoviesToolbar from './MoviesToolbar/MoviesToolbar';
import NoMovieFound from '../../pages/NotFound/NoMovieFound';
import './Movies.css';
import Movie from './Movie/Movie';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';

const Movies = () => {
  const state = useSelector(({ movieState }) => movieState);
  const { movies, totalAmount, query } = state;
  const dispatch = useDispatch();
  const { query: searchQuery } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/' && searchQuery === undefined) {
      // Reset state when query(url) is undefined(example: Logo navigation)
      dispatch(resetState());
    }
  }, [pathname]); // eslint-disable-line

  useEffect(() => {
    if (pathname.startsWith('/search') && query !== searchQuery) {
      dispatch(updateMovieParamAndGetMovies({
        query: searchQuery,
        genre: 'All',
        lastQuery: null
      }));
    }
  }, []); // eslint-disable-line

  return (
    <div className="MovieListWrapper">
      <MoviesToolbar/>
      <Row>
        {totalAmount !== null && (
          <Col size={12}>
            <span style={{ fontSize: '20px' }}>{`${totalAmount} movies found`}</span>
          </Col>
        )}
      </Row>
      <Row className="MovieList">
        {movies.length !== 0 ? movies.map(movie => <Movie key={movie.id} movie={movie} />) : <NoMovieFound />}
      </Row>
    </div>
  );
};

export default Movies;

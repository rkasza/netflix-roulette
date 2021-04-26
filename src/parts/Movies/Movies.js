import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getMovies } from '../../store/actions/movieActions'
import MoviesToolbar from './MoviesToolbar/MoviesToolbar';
import NoMovieFound from '../../pages/NotFound/NoMovieFound';
import './Movies.css';
import Movie from './Movie/Movie';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';

const Movies = () => {
  const { movies, totalAmount, lastQuery } = useSelector(({ movieState }) => movieState);
  const dispatch = useDispatch();
  const { query } = useParams();

  useEffect(() => {
    if (query && (lastQuery !== query)) {
      dispatch(getMovies());
    }
  }, [dispatch, query, lastQuery]);
   
  return (
    <div className="MovieListWrapper">
      <MoviesToolbar/>
      <Row>
        {query && (
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

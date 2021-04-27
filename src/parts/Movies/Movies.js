import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from 'react-router-dom';
import { getMovies, resetState, updateMovieParam } from '../../store/actions/movieActions'
import MoviesToolbar from './MoviesToolbar/MoviesToolbar';
import NoMovieFound from '../../pages/NotFound/NoMovieFound';
import './Movies.css';
import Movie from './Movie/Movie';
import Row from '../../components/Skeleton/Row';
import Col from '../../components/Skeleton/Col';

const Movies = () => {
  const { movies, totalAmount, lastQuery, query } = useSelector(({ movieState }) => movieState);
  const dispatch = useDispatch();
  const { query: searchQuery } = useParams();
  const { pathname } = useLocation();
  
  useEffect(() => {
    //Save queryfrom url when page is reloaded or a user lands on "localhost/search/Search query"
    if (pathname !== '/' && query !== searchQuery) {
      dispatch(updateMovieParam({
        query: searchQuery,
        genre: 'All' // Set genre to 'All' when component is mounted
      })); 
    }
  }, []);// eslint-disable-line

  useEffect(() => {
    if (searchQuery && (lastQuery !== query)) {
      dispatch(getMovies());
    } else if (pathname === '/' && searchQuery === undefined) {
      // Reset state when query(url) is undefined(example: Logo navigation)
      dispatch(resetState());
    }
  }, [searchQuery]); // eslint-disable-line

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

import { useSelector, useDispatch } from "react-redux";
import * as movieActions from '../../../store/actions/movieActions'
import Row from '../../../components/Skeleton/Row';
import Genres from './Genres/Genres';
import SortBy from './SortBy/SortBy';
// Dispatch sort/filter functions here useEffect maybe?
const MoviesToolbar = () => {
  const { genre, sortBy } = useSelector(({ movieState }) => movieState);
  const dispatch = useDispatch();
  
  const handleGenreChange = newGenre => {
    if (genre !== newGenre) {
      dispatch(movieActions.updateMovieParamAndGetMovies({ genre: newGenre }))
    }
  };
  const handleSortByChange = newSortBy => dispatch(movieActions.updateMovieParamAndGetMovies({ sortBy: newSortBy }));

  return (
    <Row className="MoviesToolbar">
      <Genres selected={genre} onGenreChange={handleGenreChange} />
      <SortBy value={sortBy} onChange={handleSortByChange} />
    </Row>
  );
}

export default MoviesToolbar;
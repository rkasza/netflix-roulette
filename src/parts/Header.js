import { useSelector, useDispatch } from 'react-redux';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Home from '../pages/Home/Home';
import * as actions from '../store/actions/movieActions';

const Header = () => {
  const { movie } = useSelector(({ movieState }) => movieState);
  const dispatch = useDispatch();

  const backHome = () => dispatch(actions.saveMovie(null));

  return movie ? <MovieDetails movie={movie} backHome={backHome}/> : <Home />;
};
  

export default Header;

import { Switch, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails/MovieDetails';
import FindMovie from './Home/FindMovie';
import Movies from '../parts/Movies/Movies';

const MainPage = () => {
  return (
    <>
    <Switch>
      <Route path="/movie/:movieId"><MovieDetails /></Route>
      <Route path={['/search/:query', '/']} exact><FindMovie /></Route>
    </Switch>
    <Movies />
  </>
  )
};

export default MainPage;

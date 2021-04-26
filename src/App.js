import { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import Logo from './components/Logo/Logo';
import Container from  './components/Skeleton/Container';
import Movies from './parts/Movies/Movies';
import './assets/css/App.css';
import Modal from './components/Modal/Modal';
import useModal from './hooks/useModal';
import PageNotFound from './pages/NotFound/PageNotFound';
import FindMovie from './pages/Home/FindMovie';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import { resetQuery } from './store/actions/movieActions';

function App() {
  const { modalState: { show, modalBody, modalClassName }, closeModal } = useModal();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname === '/') {
      dispatch(resetQuery());
    }
    
  }, [pathname, dispatch]);

  return (
    <ErrorBoundary>
      <Container className="PageContent">
        <Switch>
          <Route path="/movie/:movieId"><MovieDetails /><Movies /></Route>
          <Route path={['/search/:query', '/']} exact><FindMovie /><Movies /></Route>
          <Route path="/notfound" exact><PageNotFound /></Route> 
          <Route path="*"><Redirect to="/notfound"/></Route>
        </Switch>
        <footer><Logo fontSize='18px' /></footer>
      </Container>
      {show && <Modal onClose={closeModal} className={modalClassName}>{modalBody}</Modal>}
    </ErrorBoundary>
  );
}

export default App;

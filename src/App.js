import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
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

function App() {
  const { modalState: { show, modalBody, modalClassName },  closeModal } = useModal();
  
  return (
    <ErrorBoundary>
      <Router>
        <Container className="PageContent">
          <Switch>
            <Route path="/" exact><FindMovie /><Movies /></Route>
            <Route path="/movie/:movieId"><MovieDetails /><Movies /></Route>
            <Route path="/notfound"exact><PageNotFound /></Route> 
            <Route path="*"><Redirect to="/notfound"/></Route>
          </Switch>
          <footer><Logo fontSize='18px' /></footer>
        </Container>
      </Router>
      {show && <Modal onClose={closeModal} className={modalClassName}>{modalBody}</Modal>}
    </ErrorBoundary>
  );
}

export default App;

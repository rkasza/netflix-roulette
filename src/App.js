import { Redirect, Route, Switch } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';
import Logo from './components/Logo/Logo';
import Container from  './components/Skeleton/Container';
import './assets/css/App.css';
import Modal from './components/Modal/Modal';
import useModal from './hooks/useModal';
import PageNotFound from './pages/NotFound/PageNotFound';
import MainPage from './pages/MainPage';

function App() {
  const { modalState: { show, modalBody, modalClassName }, closeModal } = useModal();
  return (
    <ErrorBoundary>
      <Container className="PageContent">
        <Switch>
          <Route path={['/search/:query', '/movie/:movieId', '/']} exact><MainPage /></Route>
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

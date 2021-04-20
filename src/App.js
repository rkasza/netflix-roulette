import ErrorBoundary from './components/ErrorBoundary';
import Header from './parts/Header';
import Logo from './components/Logo/Logo';
import Container from  './components/Skeleton/Container';
import Movies from './parts/Movies/Movies';
import './assets/css/App.css';
import Modal from './components/Modal/Modal';
import useModal from './hooks/useModal';

function App() {
  const { modalState: { show, modalBody, modalClassName },  closeModal } = useModal();
  
  return (
    <ErrorBoundary>
      <Container className="PageContent">
        <Header />
        <Movies />
        <footer><Logo fontSize='18px' /></footer>
      </Container>
      {show && <Modal onClose={closeModal} className={modalClassName}>{modalBody}</Modal>}
    </ErrorBoundary>
  );
}

export default App;

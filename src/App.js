import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home/Home';
import Logo from './components/Logo/Logo';
import Container from  './components/Skeleton/Container';
import './assets/css/App.css';


function App() {
  return (
    <ErrorBoundary>
      <Container className="PageContent">
        <Home />    
        <footer><Logo fontSize='18px' /></footer>
      </Container>
    </ErrorBoundary>
  );
}

export default App;

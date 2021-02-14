import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home/Home';

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;

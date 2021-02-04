import HelloWorldWithCreateElement from './components/HelloWorldWithCreateElement';
import HelloWorldWithClass from './components/HelloWorldWithClass';

function App() {
  return <>
    <HelloWorldWithCreateElement el='h2'>Hello World</HelloWorldWithCreateElement>
    <HelloWorldWithClass style={{ textAlign: 'center' }}>Hello World2</HelloWorldWithClass>
  </>;
}

export default App;

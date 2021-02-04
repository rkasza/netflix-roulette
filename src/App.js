import HelloWorldWithCreateElement from './components/HelloWorldWithCreateElement';
import HelloWorldWithClass from './components/HelloWorldWithClass';
import HelloWorldWithPureComponent from './components/HelloWorldWithPureComponent';

function App() {
  return <>
    <HelloWorldWithCreateElement el='h2'>Hello World</HelloWorldWithCreateElement>
    <HelloWorldWithClass style={{ textAlign: 'center' }}>Hello World2</HelloWorldWithClass>
    <HelloWorldWithPureComponent style={{ textAlign: 'right' }}>Hello World3</HelloWorldWithPureComponent>
  </>;
}

export default App;

import Header from './components/header';

function App() {
  return (
    <div>
      <Header count={0} onClick={() => console.log('Header called')} />
    </div>
  );
}

export default App;

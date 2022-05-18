import './App.css';

function App() {
      const Gg = () => {
    return (
      <p> {new Date().getFullYear()}</p>

      )
  }

  return (
    <div className="App">
      <header className="App-header">
      <Gg/>
      </header>
    </div>
  );
}

export default App;

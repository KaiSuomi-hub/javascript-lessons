import './App.css';
import Task3 from './components/task3.component';

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
      <Task3/>
      </header>
    </div>
  );
}

export default App;

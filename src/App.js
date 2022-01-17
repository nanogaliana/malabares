import './App.css';
import NavBar from './components/NavBar';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Malabares Galiana</h1>
      </header>
      <NavBar />
    </div>
  );
}

export default App;

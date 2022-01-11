import logo from './images/logo.png';
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Malabares Galiana</h1>
        <NavBar />
      </header>
    </div>
  );
}

export default App;

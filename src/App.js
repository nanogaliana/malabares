import './App.css';
import logo from './images/logo.png';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Malabares Galiana</h1>
      </header>
      <NavBar />
      <ItemListContainer content="Catálogo de Productos"/>
    </div>
  );
}

export default App;

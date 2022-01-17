import './App.css';
import logo from './images/logo.png';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const agregarAlCarrito = (cantidad) => {
    setTotal(total+cantidad)
    console.log('cantidad:' + cantidad + ' total:' + total)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Malabares Galiana</h1>
      </header>
      <NavBar total={total}/>
      <ItemListContainer content="Catálogo de Productos" onAddCallback={agregarAlCarrito}/>
    </div>
  );
}

export default App;

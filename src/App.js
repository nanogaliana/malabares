import './App.css';
import logo from './images/logo.png';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductosPage from './pages/ProductosPage';
import ProductoPage from "./pages/ProductoPage";
import CategoriaPage from './pages/CategoriaPage';
import PreguntasPage from './pages/PreguntasPage';
import ContactoPage from './pages/ContactoPage';
import CarritoPage from './pages/CarritoPage';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Malabares Galiana</Link>
      </header>
      <NavBar />
      <div className="App-content">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="productos">
              <Route index element={<ProductosPage/>} />
              <Route path=":productId" element={<ProductoPage />} />
            </Route>
            <Route path="categoria">
              <Route path=":categoryId" element={<CategoriaPage />} />
            </Route>
            <Route path="contacto" element={<ContactoPage />} />
            <Route path="preguntas-frecuentes" element={<PreguntasPage />} />
            <Route path="carrito" element={<CarritoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './styles.css';
import {Link} from "react-router-dom";
import CartWidget from '../CartWidget';
import { useCart } from '../../context/CartContext';

const NavBar = () => {
  const { getQuantity } = useCart();
  
  return (
    <nav className='navbar'>
      <Link to="/">Inicio</Link>
      <Link to="/categoria/pelotas">Pelotas</Link>
      <Link to="/categoria/esferas">Esferas</Link>
      <Link to="/categoria/clavas">Clavas</Link>
      <Link to="/contacto">Contacto</Link>
      <CartWidget total={getQuantity()}/>
    </nav>
  );
}
export default NavBar;

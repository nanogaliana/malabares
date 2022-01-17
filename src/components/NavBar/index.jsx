import './styles.css';
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <p>Inicio</p>
      <p>Productos</p>
      <p>FAQ</p>
      <p>Contacto</p>
      <CartWidget/>
    </nav>
  );
}
export default NavBar;

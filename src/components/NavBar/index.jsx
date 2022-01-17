import './styles.css';
import CartWidget from '../CartWidget';

const NavBar = ({total}) => {
  return (
    <nav className='navbar'>
      <p>Inicio</p>
      <p>Productos</p>
      <p>FAQ</p>
      <p>Contacto</p>
      <CartWidget total={total}/>
    </nav>
  );
}
export default NavBar;

import {Link} from "react-router-dom";
import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem";
import './styles.css';

const Cart = () => {
  const { cart } = useCart();
  const totalCarrito = cart.reduce((t, item) => t = t + (item.quantity * item.product.price),0);

  return (
    <>
      {cart.length === 0 ? (
        <div className='carritoVacio'>No hay artículos en el carrito.<br/>
        <Link to="/">Ver el catálogo</Link>
        </div>
      ) : (
        <>
          {
            cart.map((row) => <CartItem key={row.product.id} product={row.product} quantity={row.quantity} />)
          }
          <article className='row summary' >
            <div className='img' />
            <div className='name'></div>
            <div className='articulos'>TOTAL: {cart.length} artículo{cart.length>1?'s':''}</div>
            <div className='total'>${totalCarrito}</div>
          </article>
          <button className="btn" onClick={() => alert('no implementado')}>Finalizar Compra</button>
        </>
      )}
    </>
  );
};

export default Cart;

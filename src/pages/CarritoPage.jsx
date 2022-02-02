import {useNavigate} from "react-router-dom";
import { useCart } from "../context/CartContext"
import CartItem from "../components/CartItem";

const CarritoPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <div className="carrito">
      <h1>Carrito de compras</h1>
      <div className="carritoList">
        {cart.length === 0 ? (
          <p>carrito vacío</p>
        ) : (
          <>
            {
              cart.map((row) => <CartItem key={row.product.id} product={row.product} quantity={row.quantity} />)
            }
            <p className='articuloCarrito'>{cart.length} artículo{cart.length>1?'s':''} en el carrito</p>
            <button className="btn" onClick={() => alert('no implementado')}>Finalizar Compra</button>
          </>
        )}
        <button className="btn" onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
}

export default CarritoPage;

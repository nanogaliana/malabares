import * as React from "react";
import {Link} from "react-router-dom";
import { useCart } from "../../context/CartContext"
import {getOrders } from '../../database/firebase';
import {useNavigate} from "react-router-dom";
import CartItem from "../CartItem";
import './styles.css';

const Cart = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [validation, setValidation] = React.useState("");
  
  const {cart, getTotal, clearAll} = useCart();
  const navigate = useNavigate();
  const totalCarrito = cart.reduce((t, item) => t = t + (item.quantity * item.product.price),0);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setValidation("");
    if (!name || !phone || !email) {
      setValidation("Por favor llene los campos");
      return false;
    }

    const newOrder = {
      buyer: { name, phone, email },
      items: cart.map((item) => ({ id: item.product.id, name: item.product.name, quantity: item.quantity, price: item.product.price })),
      date: new Date(),
      total: getTotal()
    };

    console.log(newOrder);
    const response = await getOrders().add(newOrder);
    console.log(`orden ${response.id} creada`);

    clearAll()

    navigate(`/gracias/${response.id}`);
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className='carritoVacio'>No hay artículos en el carrito.<br/>
          <Link to="/">Ver el catálogo</Link>
        </div>
      ) : (
        <>
          <div className="carritoList">
            {
              cart.map((row) => <CartItem key={row.product.id} product={row.product} quantity={row.quantity} />)
            }
            <article className='row summary' >
              <div className='img' />
              <div className='name'></div>
              <div className='articulos'>TOTAL: {cart.length} artículo{cart.length>1?'s':''}</div>
              <div className='total'>${totalCarrito}</div>
            </article>
          </div>
          <form className='carrito sombra' onSubmit={handleSubmit}>
            <h1>Complete sus datos</h1>
            <div className='sameLine'>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Escriba su nombre" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='sameLine'>
              <label htmlFor="phone">Teléfono</label>
              <input type="number" id="phone" name="phone" placeholder="Escriba su teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='sameLine'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Escriba su email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {(validation === ''? '': <div className="validation">{validation}</div>)}
            <div className='sameLine'>
              <input type="submit" className="btn" value="Finalizar compra" />
              <button className="btn" onClick={() => navigate(-1)}>Volver</button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Cart;

import {useNavigate} from "react-router-dom";
import Cart from "../components/Cart";

const CarritoPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="carrito">
      <h1>Carrito de compras</h1>
      <div className="carritoList">
        <Cart />
        <button className="btn" onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
}

export default CarritoPage;

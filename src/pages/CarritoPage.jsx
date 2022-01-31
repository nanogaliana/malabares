import {useNavigate} from "react-router-dom";

const CarritoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="carrito">
      <h1>Carrito de compras</h1>

      <p>(Aca van a estar los productos)</p>

      <button className="btn" onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

export default CarritoPage;

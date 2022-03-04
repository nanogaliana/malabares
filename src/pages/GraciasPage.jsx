import * as React from "react";
import { useParams } from "react-router-dom";
import {getOrder } from '../database/firebase';

const GraciasPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = React.useState({});

  React.useEffect(() => {
    getOrder(orderId)
      .get()
      .then((rta) => setOrder({ id: rta.id, ...rta.data() }));
  }, [orderId]);

  if (!order.id) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <p>{order.buyer.name}, gracias por su compra</p>
      <table className="compra sombra">
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
          {order.items.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>$ {product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default GraciasPage;

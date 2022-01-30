import { useState,useEffect } from 'react'
import { getProducto } from "../../database/productos";
import { ImSpinner9 } from 'react-icons/im';
import ItemDetail from '../ItemDetail';
import './styles.css';

const ItemDetailContainer = ({productId, onAddCallback}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducto(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [productId, onAddCallback]);

/*   useEffect(() => {
    const URL = `http://localhost:3001/productos/${productId}`;
    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, [productId]);
  if (isLoading || !product) return <p>Cargando...</p>; */

  return (
    <div className='productDetailWrapper'>
      {isLoading ? (
        <div className='loading'>cargando producto {productId}
          <ImSpinner9 className="spinner" />
        </div>
      ) : (
        <ItemDetail product={product} onAddCallback={onAddCallback}/>
      )}
    </div>
  )
};

export default ItemDetailContainer;

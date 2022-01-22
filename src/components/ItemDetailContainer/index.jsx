import { useState,useEffect } from 'react'
import { getProducto } from "../../database/productos";
import { ImSpinner9 } from 'react-icons/im';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = ({productId}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducto(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [productId]);

  return (
    <div className='productDetailWrapper'>
      {isLoading ? (
        <div className='loading'>cargando producto {productId}
          <ImSpinner9 className="spinner" />
        </div>
      ) : (
        <ItemDetail product={product}/>
      )}
    </div>
  )
};

export default ItemDetailContainer;

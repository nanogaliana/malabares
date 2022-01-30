import { useState,useEffect } from 'react'
import { ImSpinner9 } from 'react-icons/im';
import ItemDetail from '../ItemDetail';
import './styles.css';

const ItemDetailContainer = ({productId, onAddCallback}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const URL = `http://localhost:3001/products/${productId}`;
    setIsLoading(true);
    fetch(URL)
      .then((rta) => rta.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, [productId, onAddCallback]);

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

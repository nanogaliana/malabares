import { useState,useEffect } from 'react'
import { ImSpinner9 } from 'react-icons/im';
import ItemDetail from '../ItemDetail';
import './styles.css';
import { getProduct } from "../../database/firebase";

const ItemDetailContainer = ({productId}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('producto:' + productId);
    setIsLoading(true);

    // const URL = `http://localhost:3001/products/${productId}`;
    // fetch(URL)
    //   .then((rta) => rta.json())
    //   .then((data) => setProduct(data))
    //   .finally(() => setIsLoading(false));
    
    getProduct(productId).get()
      .then((response) => {
        if (!response.exists) console.log(`El producto {productId} no existe`);
        setProduct({ ...response.data(), id: response.id });
      })
      .finally(() => setIsLoading(false));
  }, [productId]);

  return (
    <div className='productDetailWrapper'>
      {isLoading ? (
        <div className='loading'>cargando producto {productId}
          <ImSpinner9 className="spinner" />
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  )
};

export default ItemDetailContainer;

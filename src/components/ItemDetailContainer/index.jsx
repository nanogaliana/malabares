import { useState,useEffect } from 'react'
import { ImSpinner9 } from 'react-icons/im';
import ItemDetail from '../ItemDetail';
import './styles.css';
import { getProduct } from "../../database/firebase";
import {Link} from "react-router-dom";

const ItemDetailContainer = ({productId}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [existe, setExiste] = useState(false);

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
        if (!response.exists)
          console.log(`El producto ${productId} no existe`);
        else {
          setProduct({ ...response.data(), id: response.id });
          setExiste(true);
        }
      })
      .finally(() => setIsLoading(false));
  }, [productId]);
  
  if (!isLoading && !existe) {
    return <>
      <div className='error'>ERROR: El producto {productId} no existe!</div>
      <Link to="/">Ver el catálogo</Link>
    </>;
  }

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

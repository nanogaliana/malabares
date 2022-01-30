import ItemList from '../ItemList';
import './styles.css';
import { useState,useEffect } from 'react'
import { getProductos } from "../../database/productos";
import { ImSpinner9 } from 'react-icons/im';

const ItemListContainer = ({categoryId}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductos(categoryId)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  return (
    <div className='productWrapper'>
      <h2>Catálogo de Productos</h2>
      {isLoading ? (
        <div className='loading'>cargando productos...
          <ImSpinner9 className="spinner" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}

export default ItemListContainer

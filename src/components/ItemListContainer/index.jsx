import ItemList from '../ItemList';
import ItemCount from '../ItemCount';
import './styles.css';
import { useState,useEffect } from 'react'
import { getProductos } from "../../database/productos";
import { ImSpinner9 } from 'react-icons/im';
import ItemDetailContainer from '../ItemDetailContainer';

const ItemListContainer = ({onAddCallback}) => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);
  
  const productoSeleccionado = (productId) => {
    console.log('productoSeleccionado:' + productId);
    setProductId(productId);
  }

  return (
    <div className='productWrapper'>
      <h2>Catálogo de Productos</h2>
      {isLoading ? (
        <div className='loading'>cargando productos...
          <ImSpinner9 className="spinner" />
        </div>
      ) : (
        <ItemList products={products} onClickCallback={productoSeleccionado}/>
      )}
      {productId > 0 ? (
        <ItemDetailContainer productId={productId}/>
      ) : (
        <div>(hacer click sobre un producto)</div>
      )}
      
      <ItemCount stockInicial={15} cantidadInicial={1} onAddCallback={onAddCallback}/>
    </div>
  )
}

export default ItemListContainer

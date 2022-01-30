import ItemList from '../ItemList';
import './styles.css';
import { useState,useEffect } from 'react'
import { ImSpinner9 } from 'react-icons/im';

const URLbase = "http://localhost:3001/products";

const ItemListContainer = ({categoryId}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('categoria:' + categoryId);
    let url = URLbase + (categoryId === undefined? '': '?category=' + categoryId);

    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  if (error) {
    return <p>Ha habido un error: {error.message}</p>;
  }

  return (
    <div className='productWrapper'>
      <h2>Catálogo de <span className='categoria'>{(categoryId === undefined? 'productos': categoryId)}</span></h2>
      {isLoading ? (
        <div className='loading'>cargando...
          <ImSpinner9 className="spinner" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  )
}

export default ItemListContainer

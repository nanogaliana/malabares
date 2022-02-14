import ItemList from '../ItemList';
import './styles.css';
import { useState,useEffect } from 'react'
import { ImSpinner9 } from 'react-icons/im';
import { getProducts } from "../../database/firebase";

const ItemListContainer = ({categoryId}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('categoria:' + (categoryId === undefined? 'TODOS': categoryId));
    // const URLbase = "http://localhost:3001/products";
    // let url = URLbase + (categoryId === undefined? '': '?category=' + categoryId);
    // setIsLoading(true);
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => setProducts(json))
    //   .catch((err) => setError(err))
    //   .finally(() => setIsLoading(false));

    let productsCollection;
    if (categoryId === undefined) {
      productsCollection = getProducts().orderBy("category","desc");
    } else {
      productsCollection = getProducts().where("category", "==", categoryId);
    }
    
    const getDataFromFirestore = async () => {
      setIsLoading(true);
      try {
        const response = await productsCollection.get();
        if (response.empty) console.log("No hay productos");
        setProducts(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDataFromFirestore();
  }, [categoryId]);

  if (error) {
    return <p>Error: {error.message}</p>;
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

import { useParams } from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer';

const CategoriaPage = () => {
  const { categoryId } = useParams();

  return (
    <ItemListContainer categoryId={categoryId}/>
  );
}

export default CategoriaPage;

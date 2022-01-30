import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";

const ProductoPage = ({onAddCallback}) => {
  const { productId } = useParams();

  return (
    <ItemDetailContainer productId={productId} onAddCallback={onAddCallback}/>
  );
}

export default ProductoPage;

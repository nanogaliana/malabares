import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";

const ProductoPage = () => {
  const { productId } = useParams();

  return (
    <ItemDetailContainer productId={productId} />
  );
}

export default ProductoPage;

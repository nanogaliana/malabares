import { useNavigate } from "react-router-dom";
import './styles.css';

const Item = ({product}) => {
    const navigate = useNavigate();

    return (
        <div className='product sombra' onClick={() => navigate(`/productos/${product.id}`)}>
            <img src={product.img} alt={product.name} />
            <p className='product__name'>{product.name}</p>
            <p className='product__price'>${product.price}</p>
        </div>
    )
}

export default Item

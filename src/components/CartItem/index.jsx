import './styles.css';
import ItemCount from '../ItemCount';
import { useCart } from '../../context/CartContext';

const CartItem = ({product, quantity}) => {
    const { addItem } = useCart();

    const actualizarCantidadCarrito = (cantidad) => {
        addItem(product,cantidad);
    }

    return (
        <article className='row' >
            <img src={product.img} alt={product.name} />
            <div className='name'>{product.name}
                <button className='link' onClick={() => actualizarCantidadCarrito(0)}>Eliminar</button>
            </div>
            <ItemCount stockInicial={product.stock} cantidadInicial={quantity} onAddCallback={actualizarCantidadCarrito} existeEnCarrito={true} />
            <div className='total'>${quantity * product.price}</div>
        </article>
    )
}

export default CartItem

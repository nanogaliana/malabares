import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './styles.css';
import ItemCount from '../ItemCount';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({product}) => {
    const navigate = useNavigate();
    const { cart, addItem, existeItem } = useCart();

    const [cantidadCarrito, setCantidadCarrito] = useState(0);
    const agregarCantidadAlCarrito = (cantidad) => {
        addItem(product,cantidad);
        setCantidadCarrito(cantidad);
    }
    const existeEnCarrito = (existeItem(product.id) > 0);
    const cantInicial = (existeEnCarrito? existeItem(product.id): 1);

    return (
        <div className='productDetail'>
            <img src={product.img} alt={product.name} />
            <div className='detalles sombra'>
                <h2>{product.name}</h2>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <input name="descripcion" type="text" defaultValue={product.description}/>
                </div>
                <div>
                    <label htmlFor="material">Material:</label>
                    <input name="material" type="text" defaultValue={product.material}/>
                </div>
                <div>
                    <label htmlFor="tamaño">Tamaño:</label>
                    <input name="tamaño" type="text" defaultValue={product.size}/>
                </div>
                <div>
                    <label htmlFor="peso">Peso:</label>
                    <input name="peso" type="text" defaultValue={product.weight}/>
                </div>
                <div>
                    <label htmlFor="valor">Valor:</label>
                    <input name="valor" type="text" defaultValue={'$ ' + product.price}/>
                </div>

                {cantidadCarrito === 0 ? (
                    <ItemCount stockInicial={product.stock} cantidadInicial={cantInicial} onAddCallback={agregarCantidadAlCarrito} existeEnCarrito={existeEnCarrito} />
                ) : (
                    <>
                        <p className='info'>El carrito tiene {cantidadCarrito} unidades</p>
                        <button className="btn" onClick={() => navigate('/carrito')}>Ver Carrito</button>
                    </>
                )}
                
                <button className="btn" onClick={() => navigate(-1)}>Volver</button>
            </div>
        </div>
    )
}

export default ItemDetail;

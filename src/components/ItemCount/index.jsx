import './styles.css';
import { useState } from 'react'

const ItemCount = ({stockInicial, cantidadInicial, onAddCallback}) => {
    const [stock, setStock] = useState(stockInicial)
    const [cantidad, setCantidad] = useState(cantidadInicial)
    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad -1)
        }
    }
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad +1)
        }
    }
    const agregarAlCarrito = (event) => {
        event.preventDefault();
        if (cantidad > 0) {
            setStock(stock - cantidad)
            onAddCallback(cantidad)
            setCantidad(0)
        }
    }

    return (
        <div className='contador'>
            <div className='contador__stock'>disponible: {stock}</div>
            <button className='btn contador__operador' onClick={restar}>-</button>
            <div className='contador__cantidad'>{cantidad}</div>
            <button className='btn contador__operador' onClick={sumar}>+</button>
            <button className='btn contador__agregarCarrito' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

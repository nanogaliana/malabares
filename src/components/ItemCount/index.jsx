import './styles.css';
import { useState } from 'react'

const ItemCount = ({stockInicial, cantidadInicial, onAddCallback, existeEnCarrito}) => {
    const [cantidad, setCantidad] = useState(cantidadInicial)
    const restar = () => {
        if (existeEnCarrito && cantidad > 0) {
            setCantidad(cantidad -1)
        }
        else if (cantidad > 1) {
            setCantidad(cantidad -1)
        }
    }
    const sumar = () => {
        if (cantidad < stockInicial) {
            setCantidad(cantidad +1)
        }
    }
    const agregarAlCarrito = (event) => {
        event.preventDefault();
        if (cantidad >= 0) {  //dejo >= cero para poder eliminar el producto desde el carrito, poniendo cantidad cero
            onAddCallback(cantidad)
        }
    }

    return (
        <div className='contador'>
            <button className='btn contador__operador' onClick={restar}>-</button>
            <div className='contador__cantidad'>{cantidad}</div>
            <button className='btn contador__operador' onClick={sumar}>+</button>
            <button className='btn contador__agregarCarrito' onClick={agregarAlCarrito}> {existeEnCarrito?'Actualizar':'Agregar al carrito'} </button>

            <div className='contador__stock'>disponible: {stockInicial}</div>
        </div>
    )
}

export default ItemCount

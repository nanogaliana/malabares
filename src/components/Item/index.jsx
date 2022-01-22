import React from 'react'
import './styles.css';

const Item = ({product, onClickCallback}) => {
    const seleccionarProducto = () => {
        onClickCallback(product.id);
    }

    return (
        <div className='product' onClick={seleccionarProducto}>
            <img src={product.img} alt={product.name} />
            <p className='product__name'>{product.name}</p>
            <p className='product__price'>${product.price}</p>
        </div>
    )
}

export default Item

import React from 'react'
import './styles.css';
import Item from "../Item";

const ItemList = ({products, onClickCallback}) => {
    return (
        <div className='products'>
        {
            products.map((product) => <Item key={product.id} product={product} onClickCallback={onClickCallback} />)
        }
        </div>
    )
}

export default ItemList

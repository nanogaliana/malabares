import React from 'react'
import './styles.css';
import Item from "../Item";

const ItemList = ({products}) => {
    return (
        <div className='products'>
        {
            products.map((product) => <Item key={product.id} product={product} />)
        }
        </div>
    )
}

export default ItemList

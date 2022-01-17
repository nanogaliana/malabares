import React from 'react'
import './styles.css';

const ItemListContainer = ({content}) => {
    return (
        <div className='products'>
            <p>{content}</p>
        </div>
    )
}

export default ItemListContainer

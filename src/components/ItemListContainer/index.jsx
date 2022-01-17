import React from 'react'
import ItemCount from '../ItemCount';
import './styles.css';

const ItemListContainer = ({content,onAddCallback}) => {
    return (
        <div>
            <h2>{content}</h2>
            <div className='products'>
                <ItemCount stockInicial={15} cantidadInicial={1} onAddCallback={onAddCallback}/>    
            </div>
        </div>
    )
}

export default ItemListContainer

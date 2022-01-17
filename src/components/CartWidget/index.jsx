import React from 'react'
import {BsCart3} from 'react-icons/bs'
import './styles.css';

const CartWidget = ({total}) => {
    return (
        <div className='cart'>
            <BsCart3 className='cartIcon' />
            <span className='cartTotal'>{total}</span>
        </div>
    )
}

export default CartWidget

import React from 'react'
import {BsCart3} from 'react-icons/bs'
import {Link} from "react-router-dom";
import './styles.css';

const CartWidget = ({total}) => {
    return (
        <Link to="/carrito" className='cart'>
            <BsCart3 className='cartIcon' />
            <span className='cartTotal'>{total}</span>
        </Link>
    )
}

export default CartWidget

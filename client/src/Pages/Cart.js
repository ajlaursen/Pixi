import React from 'react'
import Basket from '../Components/Cart/Basket';

function Cart(props) {
    return (
        <div>
            <Basket cartItems={props.cartItems}></Basket>
        </div>
    )
}

export default Cart

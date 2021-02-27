import React from 'react'
import Basket from '../Components/Cart/Basket';

function Cart(props) {
    return (
        <div>
            <Basket {...props}></Basket>
        </div>
    )
}

export default Cart

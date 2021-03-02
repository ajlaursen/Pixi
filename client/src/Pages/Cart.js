import React from 'react'
import Basket from '../Components/Cart/Basket';

export function Cart(props) {
    return (
        <div>
            <Basket {...props}></Basket>
        </div>
    )
};

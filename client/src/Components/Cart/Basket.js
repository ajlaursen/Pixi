import React from 'react'

function Basket(props) {
  


    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {props.cartItems.map(item => {
                    return (
                        <div key={item.id}>{item.title}</div>
                    )
                })}
            </div>
        </aside>
    )
}

export default Basket

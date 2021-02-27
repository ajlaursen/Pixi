import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import SignupLogin from './Pages/SignupLogin'
import { cart } from './utils/CART'


function App() {


 
    const [ cartItems, setCartItems ]  = useState([]);

function addToCart (product) {
  cart.onAdd(product, cartItems, setCartItems)
}
function removeFromCart(product){
  cart.onRemove(product, cartItems, setCartItems)
}

function price(product) {
  return cart.itemsPrice(product, cartItems, setCartItems)
}

console.log(cartItems)

  return (
    <>
      <Router>
        <Navbar />
      
        <Switch>

          <Route 
          exact
          path="/"
          render={(props)=> (<Home cartItems={cartItems}  addToCart={addToCart} {...props} />)}
          />
          <Route 
          exact
          path="/login"
          render={(props)=> (<SignupLogin cartItems={cartItems} setCartItems={setCartItems} {...props} />)}
          />
            <Route 
          exact
          path="/cart"
          render={(props)=> (<Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} price={price} {...props} />)}
          />
             <Route 
          exact
          path="*"
          render={(props)=> (<Home cartItems={cartItems} addToCart={addToCart} {...props} />)}

          />
        </Switch>
      </Router>
    </>
  );
}

export default App;

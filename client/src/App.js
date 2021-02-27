import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Card from './Components/Cards/card'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import card from './Components/Cards/card';
import Basket from './Components/Cart/Basket';
 import Home from './Pages/Home';
 import Cart from './Pages/Cart';
// import Seller from './pages/seller';
// import Signin from './Pages/SignupLogin'
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
cart.itemsPrice(product, cartItems, setCartItems)
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

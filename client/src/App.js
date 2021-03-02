import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { cart } from './utils/CART';
import { API } from './utils/API';
import { useAuth } from './utils/context';
import { Account, Home, Cart, LoginPassport } from './Pages/';
import PrivateRoute from './Components/PrivateRoute';
import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import Cart from './Pages/Cart';
// import SignupLogin from './Pages/SignupLogin';

function App() {
  const [state, setState] = useState({
    ready: false,
  });
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const res = API.getAuth();
    if (res) {
      setAuth({ ...auth, ...res });
    }
    setState({ ...state, ready: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    cart.onAdd(product, cartItems, setCartItems);
  }

  function removeFromCart(product) {
    cart.onRemove(product, cartItems, setCartItems);
  }

  function price(product) {
    return cart.itemsPrice(product, cartItems, setCartItems);
  }

  console.log(cartItems);

  if (!state.ready) {
    return null;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home cartItems={cartItems} addToCart={addToCart} {...props} />
        )}
        />
        <Route exact path="/login" render={(props) => (
          <LoginPassport
            cartItems={cartItems}
            setCartItems={setCartItems}
            {...props}
          />
        )}
        />
        <Route exact path="/cart" render={(props) => (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            removeFromCart={removeFromCart}
            price={price}
            {...props}
          />
        )}
        />
        <PrivateRoute exact path='/account' component={Account} />
        <Route exact path="*" render={(props) => (
          <Home cartItems={cartItems} addToCart={addToCart} {...props} />
        )}
        />
      </Switch>
    </Router>
  );
}

export default App;

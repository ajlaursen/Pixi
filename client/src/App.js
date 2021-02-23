import React from 'react'
import Navbar from './Components/Navbar';
import Card from './Components/Cards/card'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
// import Home from './pages/home';
// import Seller from './pages/seller';
// import Signin from './Pages/SignupLogin'



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Card />
    <Login/>
    <Signup/>
      <Switch>

      </Switch>

    </Router>
    </>
  );
}

export default App;

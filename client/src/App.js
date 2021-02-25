import React from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupLogin from './Pages/SignupLogin'
import Home from './Pages/Home';
// import Seller from './pages/seller';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Route exact path="/login" component={SignupLogin} />
        <Route exact path="/" component={Home} />
          


        <Switch></Switch>
      </Router>
    </>
  );
}

export default App;

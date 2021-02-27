import React from 'react'
import Account from '../Components/Account';
import Card from '../Components/Cards/';



function Home(props) {
    return (
      <>
      <Account/>
        <div className="flex flex-col tablet:flex-row justify-center flex-wrap">
          
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          
          
          
        </div>
        </>
    )
}

export default Home

import React from 'react'
import Card from '../Components/Cards/card';
import ImageUpload from '../Components/ImageUpload';


function Home(props) {
    return (
        <div className="flex flex-col tablet:flex-row justify-center flex-wrap">
          
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          <ImageUpload />
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          <Card addToCart={props.addToCart}/>
          
          
          
        </div>
    )
}

export default Home

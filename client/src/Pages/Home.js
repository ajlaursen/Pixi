import React, { useState, useEffect } from 'react';
import Card from '../Components/Cards/';
import About from '../Components/About/';
import { API } from '../utils/API';
import { useAuth } from '../utils/context';
export function Home(props) {
  const { auth } = useAuth();
  const [images, setImages] = useState([]);
  const [randomCards, setRandomCards] = useState([])

  useEffect(() => {
    API.getImages()
      .then((res) => {
        setImages(res);
      }).catch((err) => {
      console.log('err', err);
    })
  }, []);

useEffect(() => {
  randomArray(images)
}, [images])

function randomArray(array){
  let i = array.length - 1
  for(i ; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const tempArray = array[i];
    array[i] = array[randomIndex]
    array[randomIndex] = tempArray
  }
  console.log("randomarray",array)
  setRandomCards(array)
}




  return (
    <>
      {!auth ? (
        <>
        <About />
        <div className="flex flex-col tablet:flex-row justify-center flex-wrap">
        {images ? (
          images.length ? (
            <>
              {
                randomCards.slice(0, 15).map(image => {
                  return (
                    <Card
                      key={image._id}
                      id={image._id}
                      src={image.location}
                      title={image.title}
                      desc={image.description}
                      price={image.price}
                      tags={image.tags}
                      addToCart={props.addToCart}
                      firstName={image.userId.firstName}
                      lastName={image.userId.lastName}
                    />
                  )
                })
            }
            </>
          ) : (
              <h1>Hmmm... No images found</h1>
          )
        ) : (
            <h1>Hmmm... No images found</h1>
          )}
          </div>
          </>
      ) : (
      <div className="flex flex-col tablet:flex-row justify-center flex-wrap">
        {images ? (
          images.length ? (
            <>
              {
                images.map(image => {
                  return (
                    <Card
                      key={image._id}
                      id={image._id}
                      src={image.location}
                      title={image.title}
                      desc={image.description}
                      price={image.price}
                      tags={image.tags}
                      addToCart={props.addToCart}
                      firstName={image.userId.firstName}
                      lastName={image.userId.lastName}
                    />
                  )
                })
            }
            </>
          ) : (
              <h1>Hmmm... No images found</h1>
          )
        ) : (
            <h1>Hmmm... No images found</h1>
          )}
          </div>
      )}
    </>
  )
};
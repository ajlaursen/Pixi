import React, { useState, useEffect } from 'react';
import { API } from '../../utils/API';
import Card from '../Cards';

function AccountUserPhotos(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    API.getUserImages()
      .then((res) => {
        console.log("Images? ",res)
        setImages(res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  return (
    <>
      {(
      <div className={`col-span-12 laptop:border-solid laptop:border-l laptop:border-black laptop:border-opacity-25 h-full pb-12 laptop:col-span-10 ${props.hidden}`}>
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
}

export default AccountUserPhotos;
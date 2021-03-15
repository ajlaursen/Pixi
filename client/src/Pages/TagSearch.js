import React, { useState, useEffect } from 'react';
import Card from '../Components/Cards/';
import { API } from '../utils/API';
export function TagSearch(props) {
  const [images, setImages] = useState([]);
  const [imageSearch, setImageSearch] = useState({"tag":"winter"})

  function handleTagSearch(e) {
    e.preventDefault();
    console.log(imageSearch)
    
    API.getImagesByTag(imageSearch)
      .then((res) => {
          setImages(res);
      })
     .catch((err) => console.log(err))

  }

  

  function handleChange(e) {
    let search = e.target.value
    setImageSearch({"tag": search});
  }

  return (
    <>
      <form onSubmit={handleTagSearch} className="flex flex-col space-y-8">
        <div className="form-item">
          <label className="text-xl ">Search by Tag</label>
          <input
            type="text"
            name="tag"
            onChange={handleChange}
            placeholder="tag"
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
          />
          <button className="text-lg font-thin text-white m-0 bg-buttonColor rounded-xl shadow-xl text-center justify-center mr-1 my-1 p-1">
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-col tablet:flex-row justify-center flex-wrap">
        {images ? (
          images.length ? (
            <>
              {images.map((image) => {
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
                );
              })}
            </>
          ) : (
            <h1>Hmmm... No images found</h1>
          )
        ) : (
          <h1>Hmmm... No images found</h1>
        )}
      </div>
      )
    </>
  );
}

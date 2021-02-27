import axios from "axios";
import React, { useState } from "react";



const ImageUpload = (props) => {

  const [state, setState] = useState({file:null})

  function handleFile(event){
    const file = event.target.files[0]
    setState({...state,file})
  }

  function handleClick(event){
    event.preventDefault()
    const formData = new FormData()
    formData.append("image", state.file)
    axios.post("/api/files", formData)
  }


  return (
    <div className="flex items-center justify-center mt-14">
      <div className="rounded rounded-t-lg overflow-hidden shadow-xl max-w-xs my-3 ">
       
        <div className="text-center px-3 pb-6 pt-2">
       <form onSubmit={handleClick}>
           <input type="file" onChange={handleFile}/>
           <input type="text" placeholder="enter title"/>
           <button>upload file</button>
        </form> 
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;

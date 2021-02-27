import React from "react";



const ImageUpload = () => {
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="rounded rounded-t-lg overflow-hidden shadow-xl max-w-xs my-3 ">
       
        <div className="text-center px-3 pb-6 pt-2">
       <form>
           <input type="file"></input>
           <button >upload file</button>
        </form> 
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;

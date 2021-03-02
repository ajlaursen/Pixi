import React from 'react';

function AccountPhotoUpload() {
  return (
    <>
      <div className="col-span-12 laptop:border-solid laptop:border-l laptop:border-black laptop:border-opacity-25 h-full pb-12 laptop:col-span-10">
        <div className="px-4 pt-4">
          <form action="#" className="flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">Add Photo</h3>
              <hr />
            </div>
            <div className="text-lg font-thin text-white   flex ">
              <div className=" bg-buttonColor rounded-xl shadow-xl text-center  px-3 py-1">
                <a to="/" className="">
                  Upload Photo
                </a>
              </div>
            </div>
            <div className="form-item">
              <label className="text-xl ">Title</label>
              <input
                type="text"
                placeholder="Photo Title"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
              />
            </div>

            <div className="form-item w-full">
              <label className="text-xl ">Description</label>
              <textarea
                cols="30"
                rows="10"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                natus nobis odio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium, eveniet fugiat? Explicabo
                assumenda dignissimos quisquam perspiciatis corporis sint
                commodi cumque rem tempora!
              </textarea>
            </div>
            <div className="flex flex-col space-y-4 laptop:space-y-0 laptop:flex-row laptop:space-x-4">
              <div className="form-item w-full">
                <label className="text-xl ">Tags</label>
                <input
                  type="text"
                  placeholder="Separated by commas"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  enable
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4 laptop:space-y-0 laptop:flex-row laptop:space-x-4">
              <div className="form-item w-full">
                <label className="text-xl ">List Price</label>
                <input
                  type="text"
                  placeholder="$0.99"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  enable
                />
              </div>
            </div>
            <div className="text-lg font-thin text-white   flex mx-auto">
              <div className=" bg-buttonColor rounded-xl shadow-xl text-center  px-3 py-1">
                <a to="/" className="">
                  Save
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountPhotoUpload;

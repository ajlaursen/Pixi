import axios from 'axios';
import React, { useState } from 'react';

const AccountPhotoUpload = (props) => {
  const [state, setState] = useState({ file: '' });
  const [formState, setFormState] = useState({});

  function handleFile(event) {
    const file = event.target.files[0];
    setState({ ...state, file });
  }

  function handleForm(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleClick(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', state.file);
    console.log(formState);
    axios.post('/api/files', formData).then((res) =>
      axios.post('/api/image', {
        location: res.data.location,
        title: formState.title,
        description: formState.description,
        free: 0,
        price: formState.price,
        tags: [formState.tags],
      })
    );
  }

  return (
    <>
      <div
        className={`col-span-12 laptop:border-solid laptop:border-l laptop:border-black laptop:border-opacity-25 h-full pb-12 laptop:col-span-10 ${props.hidden}`}
      >
        <div className="px-4 pt-4">
          <form
            action="#"
            className="flex flex-col space-y-8"
            onSubmit={handleClick}
          >
            <div>
              <h3 className="text-2xl font-semibold">Add Photo</h3>
              <hr />
            </div>
            <div className="text-lg font-thin text-white   flex ">
              <div className="bg-buttonColor rounded-xl shadow-xl text-center  px-3 py-1 cursor-pointer relative">
                <input
                  type="file"
                  onChange={handleFile}
                  id="file-upload"
                  className="cursor-pointer block opacity-0 pin-r pin-t "
                />
                <span className="top-2 left-50% absolute upload-button">
                  Upload Photo
                </span>
              </div>
            </div>
            <div className="form-item">
              <label className="text-xl ">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Photo Title"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                value={formState.title}
                defaultValue=""
                onChange={handleForm}
              />
            </div>

            <div className="form-item w-full">
              <label className="text-xl ">Description</label>
              <textarea
                name="description"
                value={formState.description}
                defaultValue=""
                onChange={handleForm}
                cols="30"
                rows="10"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                placeholder="Write a description here"
              ></textarea>
            </div>
            <div className="flex flex-col space-y-4 laptop:space-y-0 laptop:flex-row laptop:space-x-4">
              <div className="form-item w-full">
                <label className="text-xl ">Tags</label>
                <input
                  name="tags"
                  value={formState.tags}
                  defaultValue=""
                  onChange={handleForm}
                  type="text"
                  placeholder="Separated by commas"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4 laptop:space-y-0 laptop:flex-row laptop:space-x-4">
              <div className="form-item w-full">
                <label className="text-xl ">List Price</label>
                <input
                  name="price"
                  value={formState.price}
                  defaultValue=""
                  onChange={handleForm}
                  type="text"
                  placeholder="$0.99"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                />
              </div>
            </div>
            <div className="text-lg font-thin text-white   flex mx-auto">
              <button>
                <div className=" bg-buttonColor rounded-xl shadow-xl text-center  px-3 py-1">
                  Save
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountPhotoUpload;

import React, { useState } from 'react';
import { API } from '../../utils/API';

function AccountUpdateContent(props) {
  const [updateUserData, setUpdateUserData] = useState({});
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdateUserData({ ...updateUserData, [name]: value });
  }

  function handleUserUpdate(e) {
    e.preventDefault();
    console.log(updateUserData);
    API.updateUser(updateUserData)
      .then((res) => {
        console.log('update user: ', res);
      })
      .catch((err) => {
        // probably need a better way to notify on this error
        console.log('err', err);
      });
  }
  let userData = props.userData;
  return (
    <>
      <div
        className={`col-span-12 laptop:border-solid laptop:border-l laptop:border-black laptop:border-opacity-25 h-full pb-12 laptop:col-span-10 ${props.hidden}`}
      >
        <div className="px-4 pt-4">
          <form onSubmit={handleUserUpdate} className="flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">Basic Information</h3>
              <hr />
            </div>

            <div className="form-item">
              <label className="text-xl ">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                onChange={handleChange}
                defaultValue={userData.firstName}
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
              />
            </div>
            <div className="form-item">
              <label className="text-xl ">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                onChange={handleChange}
                defaultValue={userData.lastName}
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
              />
            </div>

            <div className="flex flex-col space-y-4 laptop:space-y-0 laptop:flex-row laptop:space-x-4">
              {/* <div className="form-item w-full">
                <label className="text-xl ">Username</label>
                <input
                  required
                  type="text"
                  name="username"
                  onChange={handleChange}
                  defaultValue={userData.username}
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  enable="true"
                />
              </div> */}

              <div className="form-item w-full">
                <label className="text-xl ">Email</label>
                <input
                  required
                  type="text"
                  name="email"
                  onChange={handleChange}
                  defaultValue={userData.email}
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold ">More About Me</h3>
              <hr />
            </div>

            <div className="form-item w-full">
              <label className="text-xl ">Biography</label>
              <textarea
                cols="30"
                rows="10"
                name="bio"
                onChange={handleChange}
                placeholder={userData.bio}
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                natus nobis odio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium, eveniet fugiat? Explicabo
                assumenda dignissimos quisquam perspiciatis corporis sint
                commodi cumque rem tempora!"
              ></textarea>
            </div>
            <div className="text-lg font-thin text-white   flex mx-auto">
              <div className=" bg-buttonColor rounded-xl shadow-xl text-center  px-3 py-1">
                <button className="">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountUpdateContent;

import React from 'react';

function AccountContent(props) {
  let userData = props.userData;
  return (
    <>
      <div
        className={`col-span-12 laptop:border-solid laptop:border-l laptop:border-black laptop:border-opacity-25 h-full pb-12 laptop:col-span-10 ${props.hidden}`}
      >
        <div className="px-4 pt-4">
          <form action="#" className="flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">Basic Information</h3>
              <hr />
            </div>

            <div className="form-item">
              <label className="text-xl ">First Name</label>
              <input
                type="text"
                value={userData.firstName}
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                disabled
              />
            </div>
            <div className="form-item">
              <label className="text-xl ">Last Name</label>
              <input
                type="text"
                value={userData.lastName}
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                disabled
              />
            </div>

            <div className="flex flex-col space-y-4 laptop:space-y-0 laptop:flex-row laptop:space-x-4">
              {/* <div className="form-item w-full">
                <label className="text-xl ">Username</label>
                <input
                  type="text"
                  value={userData.username}
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  disabled
                />
              </div> */}

              <div className="form-item w-full">
                <label className="text-xl ">Email</label>
                <input
                  type="text"
                  value={userData.email}
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  disabled
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
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                value={userData.bio}
                disabled
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountContent;

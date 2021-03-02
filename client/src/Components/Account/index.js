import React from 'react';
import AccountContent from './AccountInfoContent'
import AccountPhotoUpload from './AccountPhotoUpload';
import AccountUpdateContent from './AccountUpdateContent'

function Account() {
  return (
    <>
      <div className="w-full laptop:w-3/4 relative mt-4 shadow-2xl rounded my-24 mx-auto overflow-hidden">
        <div className="top h-64 w-full overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="bg w-full h-full object-cover object-center absolute z-0"
          />
          <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              className="h-24 w-24 object-cover rounded-full"
            />
            <h1 className="text-2xl font-semibold">Antonia Howell</h1>
            <h4 className="text-sm font-semibold">Joined Since '19</h4>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white ">
          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid laptop:space-x-0 laptop:space-y-4 laptop:flex-col laptop:col-span-2 laptop:justify-start ">
            <a
              href="#"
              className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold"
            >
              Account
            </a>

            <a
              href="#"
              className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
            >
              Update Information
            </a>

            <a
              href="#"
              className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
            >
              Upload Photos
            </a>
          </div>
          <AccountPhotoUpload />
        </div>
      </div>
      <AccountContent />
      <AccountUpdateContent />
    </>
  );
}

export default Account;

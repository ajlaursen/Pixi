import React, { useState, useEffect, Component } from 'react';
import AccountContent from './AccountInfoContent';
import AccountPhotoUpload from './AccountPhotoUpload';
import AccountUpdateContent from './AccountUpdateContent';
import { API } from '../../utils/API';

function AccountHolderDiv(props) {
  const [state, setState] = useState({
    accountInfo: '',
    accountUpdate: 'hidden',
    photoUpload: 'hidden',
    buttonAccountInfo: 'bg-buttonColor text-white',
    buttonAccountUpdate: 'bg-pixi text-black',
    buttonPhotoUpload: 'bg-pixi text-black',
  });

  //Need checker on email
  useEffect(async () => {
    // how do I get username?!
    let user = await API.getUser();
    console.log('user', user.userData);
    props.setUserData(user.userData);
  }, []);

  let userData = props.userData;

  const accountHidden = (num) => {
    console.log(state);
    if (num == 1) {
      setState({
        accountInfo: '',
        accountUpdate: 'hidden',
        photoUpload: 'hidden',
        buttonAccountInfo: 'bg-buttonColor text-white',
        buttonAccountUpdate: 'bg-pixi text-black',
        buttonPhotoUpload: 'bg-pixi text-black',
      });
    } else if (num == 2) {
      setState({
        accountInfo: 'hidden',
        accountUpdate: '',
        photoUpload: 'hidden',
        buttonAccountInfo: 'bg-pixi text-black',
        buttonAccountUpdate: 'bg-buttonColor text-white',
        buttonPhotoUpload: 'bg-pixi text-black',
      });
    } else if (num == 3) {
      setState({
        accountInfo: 'hidden',
        accountUpdate: 'hidden',
        photoUpload: '',
        buttonAccountInfo: 'bg-pixi text-black',
        buttonAccountUpdate: 'bg-pixi text-black',
        buttonPhotoUpload: 'bg-buttonColor text-white',
      });
    }
  };

  return (
    <>
      <div className="w-full laptop:w-3/4 relative mt-4 shadow-2xl rounded my-24 mx-auto">
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
            <h1 className="text-2xl font-semibold">
              {userData.firstName} {userData.lastName}
            </h1>
            <h4 className="text-sm font-semibold">Joined Since '19</h4>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white ">
          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid laptop:space-x-0 laptop:space-y-4 laptop:flex-col laptop:col-span-2 laptop:justify-start ">
            <button
              className={`text-sm p-2   text-center rounded font-bold hover:bg-cardColor hover:text-gray-200 ${state.buttonAccountInfo}`}
              onClick={() => accountHidden(1)}
            >
              Account
            </button>

            <button
              className={`text-sm p-2  text-center rounded font-semibold hover:bg-cardColor hover:text-gray-200 ${state.buttonAccountUpdate}`}
              onClick={() => accountHidden(2)}
            >
              Update Information
            </button>

            <button
              className={`text-sm p-2  text-center rounded font-semibold hover:bg-cardColor hover:text-gray-200 ${state.buttonPhotoUpload}`}
              onClick={() => accountHidden(3)}
            >
              Upload Photos
            </button>
          </div>
          <AccountContent hidden={state.accountInfo} userData={userData} />
          <AccountUpdateContent hidden={state.accountUpdate} userData={userData}/>
          <AccountPhotoUpload hidden={state.photoUpload} />
        </div>
      </div>
    </>
  );
}

export default AccountHolderDiv;

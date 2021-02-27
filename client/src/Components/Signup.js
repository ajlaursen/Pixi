import React, { useState } from 'react';
import API from '../utils/API'

//Parker Notes:
// Need to confirm repeat password on front end.
// Going to be modified testing routes



const Signup = () => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: ""
  })

  function handleUserSignup(event){
    event.preventDefault();
    // let user = new FormData(event.target);
    console.log(user);
    if(user.password === user.passwordConf) API.createUser(user);
  }
  
  return (
    <div className="flex laptop:mx-auto w-auto laptop:w-1/3 p-5 m-10 justify-evenly place-items-center">
      <div className="container bg-pixi p-10 m-10 rounded-xl shadow-2xl">
        <div className="text-center w-full text-4xl ">Sign up</div>
        <div className="grid place-items-center">
          <div className="p-4 bg-pixi">
            <h1 className="text-xl font-semibold">
              Hey there 👋 , 
              <span className="font-normal">
                 please fill in your information to build an awesome character
                sheet!
              </span>
            </h1>
            <form id="sign-up" className="mt-6" onSubmit={handleUserSignup}>
              <div className="flex justify-between gap-3">
                <span className="w-1/2">
                  <label
                    for="firstName"
                    className="hover:border-b-8 block text-xs font-semibold text-gray-600 uppercase"
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Cool"
                    autocomplete="given-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                    value={user.firstName}
              onChange={e => setUser({ ...user, firstName: e.target.value })}
                  />
                </span>
                <span className="w-1/2">
                  <label
                    for="lastName"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Cat"
                    autocomplete="family-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                    value={user.lastName}
              onChange={e => setUser({ ...user, lastName: e.target.value })}
                  />
                </span>
              </div>
              <label
                for="email"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email-signup"
                type="email"
                name="email"
                placeholder="cool.cat@email.com"
                autocomplete="email"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
              />
              <label
                for="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
              />
              <label
                for="password-confirm"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Confirm password
              </label>
              <input
                id="password-confirm"
                type="password"
                name="password-confirm"
                placeholder="********"
                autocomplete="new-password"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                value={user.passwordConf}
              onChange={e => setUser({ ...user, passwordConf: e.target.value })}
              />
              <button
                type="submit"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase  shadow-2xl p-2 px-3 mr-1 rounded bg-buttonColor hover:bg-cardColor"
              >
                Sign up
              </button>
              <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                <a id="login" href="login">
                  Already a Member? Click here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup

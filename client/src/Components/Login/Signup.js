import React from 'react';

export function Signup(props) {
  return (
    <div className="flex laptop:mx-auto w-auto laptop:w-1/4 bg-pixi p-5 m-10 rounded-xl shadow-2xl justify-evenly place-items-center">
      <div className="min-h-full place-items-center">
        <div className="w-11/12 p-5 bg-pixi">
          <div className="text-center w-full text-4xl ">Sign up</div>
            <h1 className="text-xl font-semibold">
              Hey there 👋 ,
              <span className="font-normal">
                please fill in your information to build an awesome character
                sheet!
              </span>
            </h1>
            <form id="sign-up" className="mt-6" onSubmit={props._handleUserSignup}>
              <div className="flex justify-between gap-3">
                <span className="w-1/2">
                  <label
                    for="firstName"
                    className="hover:border-b-8 block text-xs font-semibold text-gray-600 uppercase"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Cool"
                    autocomplete="given-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                    value={props.userSignup.firstName}
                    onChange={props._handleChangeSignup}
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
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Cat"
                    autocomplete="family-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                    value={props.userSignup.lastName}
                    onChange={props._handleChangeSignup}
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
                id="email"
                type="email"
                name="email"
                placeholder="cool.cat@email.com"
                autocomplete="email"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                value={props.userSignup.email}
                onChange={props._handleChangeSignup}
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
                value={props.userSignup.password}
                onChange={props._handleChangeSignup}
              />
              <label
                for="passwordConf"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Confirm password
              </label>
              <input
                id="passwordConf"
                type="password"
                name="passwordConf"
                placeholder="********"
                autocomplete="new-password"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                value={props.userSignup.passwordConf}
                onChange={props._handleChangeSignup}
              />
              <button
                type="submit"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase  shadow-2xl p-2 px-3 mr-1 rounded bg-buttonColor hover:bg-cardColor"
              >
                Sign up
              </button>
              <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                <a id="login" onClick={props.togglePage}>
                  Already a Member? Click here
                </a>
              </p>
            </form>
          </div>
      </div>
    </div>
  );
}

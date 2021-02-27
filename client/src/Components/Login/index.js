import React, { useState } from 'react';
import API from '../../utils/API'

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  function handleUserLogin(event) {
    event.preventDefault();
    API.login(user)
  }

  return (
    <div className="flex laptop:mx-auto w-auto laptop:w-1/4 bg-pixi p-5 m-10 rounded-xl shadow-2xl justify-evenly place-items-center">
      <div className="min-h-full place-items-center">
        <div className="w-11/12 p-5 bg-pixi">
          <div className="text-center w-full text-4xl ">Login</div>
          <h1 className="pt-4 text-xl font-semibold">
            Welcome back,{' '}
            <span className="font-normal">sign in to continue</span>
          </h1>
          <form className="mt-6 login-form" onSubmit={handleUserLogin}>
            <label
              for="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              id="email-login"
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
              id="password-login"
              type="password"
              name="password"
              placeholder="********"
              autocomplete="current-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase  shadow-2xl p-2 px-3 mr-1 rounded bg-buttonColor hover:bg-cardColor"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

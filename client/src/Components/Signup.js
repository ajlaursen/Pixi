import React from 'react'

const Signup = () => {
  return (
    <div class="flex laptop:mx-auto w-auto laptop:w-1/3 p-5 m-10 justify-evenly place-items-center">
      <div class="container bg-pixi p-10 m-10 rounded-xl shadow-2xl">
        <div class="text-center w-full text-4xl ">Sign up</div>
        <div class="grid place-items-center">
          <div class="p-4 bg-pixi">
            <h1 class="text-xl font-semibold">
              Hey there 👋 , 
              <span class="font-normal">
                 please fill in your information to build an awesome character
                sheet!
              </span>
            </h1>
            <form id="sign-up" class="mt-6">
              <div class="flex justify-between gap-3">
                <span class="w-1/2">
                  <label
                    for="firstname"
                    class="hover:border-b-8 block text-xs font-semibold text-gray-600 uppercase"
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Cool"
                    autocomplete="given-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span class="w-1/2">
                  <label
                    for="lastname"
                    class="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Cat"
                    autocomplete="family-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
              </div>
              <label
                for="email"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email-signup"
                type="email"
                name="email"
                placeholder="cool.cat@email.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label
                for="password-confirm"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Confirm password
              </label>
              <input
                id="password-confirm"
                type="password"
                name="password-confirm"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <button
                type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase  shadow-2xl p-2 px-3 mr-1 rounded bg-buttonColor hover:bg-cardColor"
              >
                Sign up
              </button>
              <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
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

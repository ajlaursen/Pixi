import React from 'react'
import { Link } from 'react-router-dom';
import '../About/aboutStyle.css'

function About() {
  return (
    <div className="pb-20 laptop:pb-36">
      <div class="m-auto max-w-6xl p-12">
        <div class="flex flex-col laptop:flex-row ">
          <div class="laptop:w-1/2 max-w-md flex flex-col justify-center mx-auto">
            <div class="laptop:text-5xl text-2xl uppercase font-black">
              The Awesome tool that we call Pixi
            </div>
            <div class="text-xl mt-4">
              PIXI is built to be a source of inspiration. You can purchase
              photos that you really like while support the artists you love.
            </div>
            <div class="my-5 h-16">
              <Link to="/login">
                <button
                  class="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48"
                >
                  Join us now
                </button>
              </Link>
            </div>
          </div>
          <div class="flex justify-center laptop:justify-end w-full laptop:w-1/2 mt-5 mx-auto">
            <div class="bg-dots">
              <div class="shadow-2xl max-w-sm z-10 rounded-full mt-6 ml-4">
                <img
                  alt="card img"
                  class="rounded-t"
                  src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
                <div class="text-2xl p-10 bg-white">
                  <img
                    alt="quote"
                    class="float-left mr-1"
                    src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                  />{' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About

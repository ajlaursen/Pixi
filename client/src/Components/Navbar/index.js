import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    burgerMenu: '',
    navMenu: 'hidden',
  };

  hamburger = () => {
    console.log(this.state);
    if (this.state.navMenu == 'hidden') {
      this.setState({
        navMenu: '',
        burgerMenu: 'hidden',
      });
    } else if (this.state.burgerMenu == 'hidden') {
      this.setState({
        navMenu: 'hidden',
        burgerMenu: '',
      });
    }
  };

  render() {
    return (
      <>
        <header className='p-4 pt-2 shadow-2xl laptop:hidden bg-pixi'>
          <nav className='flex justify-between'>
            <div className=''>
              <a href='index.html'>
                <img
                  src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613843508/smaller-logo.png'
                  className='h-52 object-contain object-right transform origin-bottom-left hover:-rotate-12 transition duration-300'
                  alt='JT Web Dev Logo'
                />
              </a>
            </div>
            <div className='flex'>
              <div className='flex flex-col justify-start my-auto '>
                <svg
                  id='burger'
                  className={`w-10 transform hover:-rotate-180 transition duration-300 ${this.state.burgerMenu}`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  onClick={() => this.hamburger()}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='{2}'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </div>
              <div
                id='menu'
                className={`flex flex-col text-right ${this.state.navMenu}`}
              >
                <div className='text-xl font-thin'>
                  <p className='flex'>
                    <Link to='/' className=''>
                      Home
                    </Link>
                    <svg
                      className='w-5 phone:hidden tablet:block'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='{2}'
                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                      />
                    </svg>
                  </p>
                </div>
                <div className='text-xl font-thin'>
                  <p className='flex'>
                    <Link to='/' className=''>
                      Browse
                    </Link>
                    <svg
                      className='w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='{2}'
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='{2}'
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </p>
                </div>
                <div className='text-xl font-thin'>
                  <div className='flex'>
                    <Link to='/account' className=''>
                      Account
                    </Link>
                    <svg
                      className="w-5"
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='{2}'
                        d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text-lg font-thin text-white m-0'>
                  <div className='flex bg-buttonColor rounded-xl shadow-xl text-center justify-center m-1 p-1'>
                    <Link to='/login' className=''>
                      Login
                    </Link>
                  </div>
                </div>
                <div className='text-lg font-thin text-white m-0'>
                  <div className='flex bg-buttonColor rounded-xl shadow-xl text-center justify-center m-1 p-1'>
                    <Link to='/login' className=''>
                      Sign up
                    </Link>
                  </div>
                </div>
                <div className='text-xl font-thin'>
                  <div className='flex'>
                    <Link to='/cart' className=''>
                      Cart
                    </Link>
                    <svg
                      className='w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='{2}'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-start my-auto'>
                <svg
                  id='x'
                  className={`w-10 flex transform hover:-rotate-90 transition duration-300  ${this.state.navMenu}`}
                  onClick={() => this.hamburger()}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='{2}'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
            </div>
          </nav>
        </header>

        <header className='hidden laptop:block flex flex-row bg-pixi shadow-xl'>
          <nav className='flex '>
            <div className='w-1/2'>
              <a href='index.html'>
                <img
                  src='https://res.cloudinary.com/dsj0x6kfo/image/upload/v1613843508/smaller-logo.png'
                  className='h-52 object-contain object-right transform origin-bottom-left hover:-rotate-12 transition duration-300'
                  alt='JT Web Dev Logo'
                />
              </a>
            </div>
            <div className='flex w-1/2 justify-end items-center'>
              <div id='menu' className='flex flex-row text-right'>
                <div className='text-xl font-thin'>
                  <p className='flex'>
                    <Link to='/' className='p-1 mx-3'>
                      Home
                    </Link>
                  </p>
                </div>
                <div className='text-xl font-thin'>
                  <p className='flex'>
                    <Link to='/' className='p-1 mx-3'>
                      Browse
                    </Link>
                  </p>
                </div>
                <div className='text-xl font-thin'>
                  <div className='flex'>
                    <Link to='/' className='p-1 mx-3'>
                      Account
                    </Link>
                  </div>
                </div>
                <div className='text-xl font-light text-white'>
                  <div className='flex bg-buttonColor rounded-xl shadow-xl mx-2'>
                    <Link to='/login' className='p-1 mx-3'>
                      Sign up
                    </Link>
                  </div>
                </div>
                <div className='text-xl font-light text-white'>
                  <div className='flex bg-buttonColor rounded-xl shadow-xl mx-2'>
                    <Link to='/login' className='p-1 mx-3'>
                      Login
                    </Link>
                  </div>
                </div>
                <div className='text-xl font-light text-white'>
                  <div className='flex bg-buttonColor rounded-xl shadow-xl mx-2'>

                    <Link to='/cart' className='p-1 mx-3'>

                      Cart
                    </Link>

                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-start my-auto'></div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Navbar;

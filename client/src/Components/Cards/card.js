import React from 'react'



function card() {
    return (
        <>

            <section className="flex flex-col tablet:flex-row justify-center">
                {/* <!-- CARD 1 --> */}
                <div className="bg-cardColor shadow-lg rounded p-3 m-4">
                    <div className="group relative">
                        <img className="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg" alt="" />
                        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">


                            <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>


                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="text-white text-2xl text-center">Title and Artist</h3>
                        <p className="text-buttonColor">Description</p>
                        <p className="">Hastag</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-buttonColor flex justify-end px-3 py-2 rounded-xl shadow-xl mx-2 text-pixi  " >
                            <p className="pr-2"> Add To Cart</p>
                            <svg
                        className='w-7 '
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='{4}'
                            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                    </svg></button></div>
                </div>
                {/* <!-- END OF CARD 1 -->

      <!-- CARD 2 --> */}
           <div className="bg-cardColor shadow-lg rounded p-3 m-4">
                    <div className="group relative">
                        <img className="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg" alt="" />
                        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">


                            <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>


                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="text-white text-2xl text-center">Title and Artist</h3>
                        <p className="text-buttonColor">Description</p>
                        <p className="">Hastag</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-buttonColor flex justify-end px-3 py-2 rounded-xl shadow-xl mx-2 text-pixi  " >
                            <p className="pr-2"> Add To Cart</p>
                            <svg
                        className='w-7 '
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='{4}'
                            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                    </svg></button></div>
                </div>
                {/* <!-- END OF CARD 2 -->

      <!-- CARD 3 --> */}
                <div className="bg-cardColor shadow-lg rounded p-3 m-4">
                    <div className="group relative">
                        <img className="w-full md:w-72 block rounded" src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg" alt="" />
                        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">


                            <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>


                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="text-white text-2xl text-center">Title and Artist</h3>
                        <p className="text-buttonColor">Description</p>
                        <p className="">Hastag</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-buttonColor flex justify-end px-3 py-2 rounded-xl shadow-xl mx-2 text-pixi  " >
                            <p className="pr-2"> Add To Cart</p>
                            <svg
                        className='w-7 '
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='{4}'
                            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                    </svg></button></div>
                </div>
                {/* <!-- END OF CARD 3 --> */}
            </section>


        </>
    )
}

export default card

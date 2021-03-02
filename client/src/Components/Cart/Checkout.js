import React from 'react'



export default function Checkout() {
    return (

        <div class="flex flex-col justify-center items-center mt-12">

            <div class="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3">
                <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                    <div>
                        <i class="fas fa-exclamation-circle text-blue-500"></i>
                        <span class="font-bold text-gray-700 text-lg">Information</span>
                    </div>
                   
                </div>

                <div class="px-10 py-5 text-gray-600">
                   Soon enough you'll be able to purchase your favorite artists digital prints. Stick with us!
            	</div>

              
            </div>

            <div className="container mx-auto p-20 m-10 w-full justify-center tablet:w-1/4 laptop:w-1/5 desktop:w-1/6 bg-pixi rounded-lg font-serif text-2xl mt-12  ">

                <label className="block flex-col justify-center">Email</label>
                <input className="block bg-gray-200 " placeholder="" type="email" maxlength="30" ></input>
                <label className="block pt-5">Card Information</label>
                <input className="block bg-gray-200" placeholder="123456789" type="text" maxlength="16"></input>
                <label className="block pt-5">Exp Date</label>
                <input className="block bg-gray-200" placeholder="12/30" type="text" maxlength="5"></input>
                <label className="block pt-5">CVV</label>
                <input className="block bg-gray-200" placeholder="123" type="text" maxlength="4"></input>
                <label className="block pt-5">Name On Card</label>
                <input className="block bg-gray-200" placeholder="" type="text" maxlength="30"></input>
                <label className="block pt-5">Country Or Region</label>
                <select className="block pt-3">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Mexico</option>
                    <option>China</option>
                </select>
                <button className="block mt-8 text-5xl bg-black text-white focus:bg-buttonColor rounded-lg px-12 py-3">Pay</button>
          </div>
          </div>




        
    )
}

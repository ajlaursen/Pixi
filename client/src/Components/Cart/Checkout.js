import React from 'react'



export default function Checkout() {
    return (
        <>
 
            <div className="container mx-auto box-border font-serif text-2xl object-center mt-12">
                <label className="block  ">Email</label>
                <input className="block bg-gray-200 " placeholder="" limit-value="16"></input>
                <label className="block pt-5">Card Information</label>
                <input className="block bg-gray-200" placeholder="123456789"></input>
                <label className="block pt-5">Name On Card</label>
                <input className="block bg-gray-200" placeholder=""></input>
                <label className="block pt-5">Country Or Region</label>
                <select className="blockpt-3">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Mexico</option>
                    <option>China</option>
                </select>
                <button className="block mt-8 text-5xl bg-black text-white focus:bg-purple-900 rounded-lg px-12 py-3">Pay</button>
            </div>



        </>
    )
}

import React from 'react';

import { Link } from 'react-router-dom';

function Basket(props) {
  function removeFromCart(item) {
    props.removeFromCart(item);
  }

  const subTotal = (props.price(props.cartItems) / 100).toFixed(2);

  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col justify-center items-center  text-gray-800 bg-white shadow-xl rounded-xl pin-r pin-y phone:4/5 tablet:w-2/3 desktop:w-1/2">
        <div className="flex-1 w-full p-4">
          <table className="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr className="h-12 uppercase m-2">
                <th className="text-left mx-5">Product</th>
                <th className="md:table-cell mx-5 text-left">Description</th>
                <th className="text-right ">
                  <span className="lg:hidden mx-5" title="Quantity">
                    Qtd
                  </span>
                  <span className="hidden sm:inline mx-5">Quantity</span>
                </th>
                <th className="hidden text-right sm:table-cell mx-5">
                  Unit price
                </th>
                <th className="text-right mx-5">Total price</th>
              </tr>
            </thead>
            <tbody>
              {props.cartItems.map((item) => {
                const totalPrice = ((item.price * item.qty) / 100).toFixed(2);
                return (
                  <tr key={item.id}>
                    <td className="pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src={item.image}
                          className="w-20 rounded mx-5"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <p className="mb-2 mx-5 line-clamp-2 hover:line-clamp-none">{item.description}</p>

                        <button
                          onClick={() => removeFromCart(item)}
                          type="button"
                          className="text-gray-700 md:ml-4"
                        >
                          <small>(Remove item)</small>
                        </button>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="text"
                            value="1"
                            name="_qty_"
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" //
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium"></span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium mx-5">
                        ${totalPrice}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="py-4">
            <div className="flex justify-between border-b">
              <div className="lg:px-4 lg:py-2 my-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                Subtotal
              </div>
              <div className="lg:px-4 lg:py-2 my-2 lg:text-lg font-bold text-center text-gray-900">
                ${subTotal}
              </div>
            </div>
          </div>
        </div>
        <Link to="/checkout">
          <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-buttonColor rounded-full shadow hover:bg-gray-700 focus:shadow-outline focus:outline-none m-3">
            <svg
              aria-hidden="true"
              data-prefix="far"
              data-icon="credit-card"
              className="w-8 my-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
              />
            </svg>
            <span className="ml-2 my-auto ">Proceed to checkout</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Basket;

/* eslint-disable no-unused-vars */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getimgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch()

    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const handleRemoveFromCart = (product) => {
      dispatch(removeFromCart(product))
    }

    const handleClearCart = () => {
      dispatch(clearCart())
    }

  return (
    <div className="flex flex-col h-full mt-12 overflow-hidden bg-white shadow-xl">
    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
      <div className="flex items-start justify-between">
        <div className="text-lg font-medium text-gray-900">Shopping cart</div>
        <div className="flex items-center ml-3 h-7 ">
          <button
            type="button"
            onClick={handleClearCart}
            className="relative px-2 py-1 -m-2 text-white transition-all duration-200 bg-red-500 rounded-md hover:bg-secondary "
          >
            <span className="">Clear Cart</span>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flow-root">
            {
                   cartItems.length > 0 ? (
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {
                            cartItems.map((product) => (
                                <li key={product?._id} className="flex py-6">
                                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                        <img
                                            alt=""
                                            src={`${getImgUrl(product?.coverImage)}`}
                                            className="object-cover object-center w-full h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col flex-1 ml-4">
                                        <div>
                                            <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <Link to='/'>{product?.title}</Link>
                                                </h3>
                                                <p className="sm:ml-4">${product?.newPrice}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category: </strong>{product?.category}</p>
                                        </div>
                                        <div className="flex flex-wrap items-end justify-between flex-1 space-y-2 text-sm">
                                            <p className="text-gray-500"><strong>Qty:</strong> 1</p>

                                            <div className="flex">
                                                <button
                                                onClick={() => handleRemoveFromCart(product)}
                                                type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }



                    </ul>
                ) : (<p>No product found!</p>)             
            }

          
             
        </div>
      </div>
    </div>

    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${totalPrice ? totalPrice : 0}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
      <div className="mt-6">
        <Link
          to="/checkout"
          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </Link>
      </div>
      <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
        <Link to="/">
          or 
          <button
            type="button"

            className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CartPage
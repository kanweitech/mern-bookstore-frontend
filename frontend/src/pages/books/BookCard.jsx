/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getimgUrl'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({book}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className="transition-shadow duration-300 rounded-lg ">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:h-72 sm:justify-center">
            <div className="border rounded-md sm:h-72 sm:flex-shrink-0">
                <Link to={`/books/${book._id}`}>
                    <img
                        src={`${getImgUrl(book?.coverImage)}`}
                        alt=""
                        className="w-full p-2 transition-all duration-200 bg-cover rounded-md cursor-pointer hover:scale-105"
                    />
                </Link>
            </div>

            <div>
                <Link to={`/books/${book._id}`}>
                    <h3 className="mb-3 text-xl font-semibold hover:text-blue-600">
                        {book?.title}
                    </h3>
                </Link>
                <p className="mb-5 text-gray-600">{book?.description.length > 80 ? `${book?.description.slice(0, 80)}...` : book?.description}</p>
                <p className="mb-5 font-medium">
                    ${book?.newPrice} <span className="ml-2 font-normal line-through">${book?.oldPrice}</span>
                </p>
                <button
                onClick={() => handleAddToCart(book)} 
                className="flex items-center gap-1 px-6 space-x-1 btn-primary ">
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BookCard
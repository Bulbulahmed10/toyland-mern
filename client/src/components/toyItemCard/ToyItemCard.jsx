import React from "react";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyItemCard = ({ categoryToyCard }) => {
  const {
    pictureUrl,
    name,
    sellerName,
    availableQuantity,
    price,
    rating,
    subCategory,
    sellerEmail,
    _id,
  } = categoryToyCard;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg mt-6">
      <img src={pictureUrl} alt={name} className="w-full h-56 object-cover" />
      <div className="px-6 py-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold capitalize">{name}</h3>
          <p className="text-gray-500 text-sm">By {sellerName}</p>
        </div>
        <Rating
          placeholderRating={rating}
          emptySymbol={<AiFillStar className="text-xl" />}
          placeholderSymbol={<AiFillStar className="text-xl text-yellow-500" />}
          fullSymbol={<AiFillStar className="text-xl text-violet-500" />}
        />
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-lg ">${price}</p>
          <p className="text-gray-600 text-sm capitalize">
            Category: {subCategory}
          </p>
          <p className="text-gray-600 text-sm">
            Available: {availableQuantity}
          </p>
        </div>
      </div>
      <div className="bg-gray-100 px-2 py-3 lg:py-3 lg:px-6 flex items-center justify-between">
        <p className="text-gray-600 text-sm md:text-base mr-1">{sellerEmail}</p>
        <Link to={`/allToy/${_id}`} state={name}>
          <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 px-1 lg:px-4 rounded ">
            <FaEye className="mr-1 inline-block" />
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyItemCard;

import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const ToyCard = ({ categoryToyCard }) => {
  const { name, pictureUrl, price, rating, _id } = categoryToyCard;
  return (
    <div data-aos="flip-up" className="bg-white rounded shadow-md p-4 flex flex-col items-center">
      <img
        src={pictureUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold capitalize">{name}</h3>
      <p className="text-blue-500 mb-2 text-2xl font-bold i font-mono">
        ${price}
      </p>
      <Rating
        placeholderRating={rating}
        emptySymbol={<AiFillStar className="text-xl" />}
        placeholderSymbol={<AiFillStar className="text-xl text-yellow-500" />}
        fullSymbol={<AiFillStar className="text-xl text-violet-500" />}
      />
      <Link to={`/allToy/${_id}`} state={name}>
      <button
        className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 px-4 rounded ">
        <FaEye className="mr-1 inline-block" />
        View Details
      </button>
      </Link>
    </div>
  );
};

export default ToyCard;

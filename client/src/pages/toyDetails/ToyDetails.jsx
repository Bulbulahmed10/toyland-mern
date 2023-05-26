import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
const ToyDetails = () => {
  const params = useParams();
  const [toyDetails, setToyDetails] = useState({});
  useEffect(() => {
    fetch(`https://toyland-server-two.vercel.app/singleToy/${params._id}`)
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  }, []);

  const {
    name,
    pictureUrl,
    sellerName,
    detailDescription,
    price,
    availableQuantity,
    subCategory,
    sellerEmail,
    rating,
  } = toyDetails;
  return (
    <>
      <div className="mx-2 md:mx-0">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mt-6 lg:w-[50%] mx-auto">
          <img
            src={pictureUrl}
            alt={name}
            className="w-full h-[300px] object-cover"
          />
          <div className="px-6 py-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold capitalize"> {name} </h3>
              <p className="text-gray-500 text-sm">By {sellerName} </p>
            </div>
            <p className="text-gray-600 text-sm mb-4"> {detailDescription} </p>
            <Rating
              placeholderRating={rating}
              emptySymbol={<AiFillStar className="text-xl" />}
              placeholderSymbol={
                <AiFillStar className="text-xl text-yellow-500" />
              }
              fullSymbol={<AiFillStar className="text-xl text-violet-500" />}
            />
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-lg ">${price} </p>
              <p className="text-gray-600 text-sm">
                Available: {availableQuantity}{" "}
              </p>
            </div>
          </div>
          <div className="bg-gray-100 py-3 px-6 flex justify-between">
            <p className="text-gray-600 text-sm capitalize">
              Category: {subCategory}{" "}
            </p>
            <p className="text-gray-600 text-sm"> {sellerEmail} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;

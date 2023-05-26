import React from "react";

const MyToyInfoTable = ({ singleToy, index, handleToyDelete, handleUpdateToy }) => {
  const { pictureUrl, name, subCategory, price, rating, availableQuantity, _id } =
    singleToy;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureUrl} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold capitalize">{name}</div>
          </div>
        </div>
      </td>
      <td className="capitalize">{subCategory}</td>
      <td>${price}</td>
      <td>{rating}</td>
      <td>{availableQuantity}</td>
      <td>
        <button onClick={() => handleUpdateToy(_id)} className="btn btn-outline btn-sm">Update</button>
        <button onClick={() => handleToyDelete(_id)} className="btn btn-outline btn-sm ml-3">Delete</button>
      </td>
    </tr>
  );
};

export default MyToyInfoTable;

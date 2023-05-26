import React, { useContext } from "react";

import { AuthContextProvider } from "../../../context/AuthContext";
import { toast } from "react-hot-toast";
import toastConfig from "../../../utilities/toastConfig";
const ToyForm = ({
  isShowToyUpdateForm,
  handleUpdateOrCancelForm,
  setIsShowToyUpdateForm,
  updateToyItemInfo = {},
}) => {
  const {
    _id,
    name,
    subCategory,
    availableQuantity,
    pictureUrl,
    rating,
    price,
    detailDescription,
  } = updateToyItemInfo;

  const { user } = useContext(AuthContextProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.toyName.value;
    const subCategory = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const pictureUrl = form.imageURL.value;
    const detailDescription = form.toyDescription.value;
    const sellerEmail = user?.email;
    const sellerName = user?.displayName;

    const toyInfo = {
      name,
      subCategory,
      availableQuantity,
      pictureUrl,
      rating,
      price,
      detailDescription,
      sellerEmail,
      sellerName,
    };

    if (!isShowToyUpdateForm) {
      fetch("https://toyland-server-two.vercel.app/allToy", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(toyInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Toy added", toastConfig);
            form.reset();
          }
        });
    } else {
      fetch(`https://toyland-server-two.vercel.app/allToy/${_id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(toyInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success(
              "Toy successfully updated!, refresh page",
              toastConfig
            );
            setIsShowToyUpdateForm(false);
            form.reset();
          }
        });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 h-fit py-6 mt-3 ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isShowToyUpdateForm ? "Update Toy" : "Add Toy"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <label
              htmlFor="toyName"
              className="block text-gray-700 font-medium mb-2">
              Toy Name
            </label>
            <div className="relative">
              <input
                defaultValue={isShowToyUpdateForm && name}
                type="text"
                id="toyName"
                name="toyName"
                required
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter toy name"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <div className="relative">
              <input
                defaultValue={isShowToyUpdateForm && subCategory}
                type="text"
                id="category"
                name="category"
                required
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter toy category"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-medium mb-2">
              Rating
            </label>
            <div className="relative">
              <input
                defaultValue={isShowToyUpdateForm && rating}
                type="number"
                id="rating"
                name="rating"
                required
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter toy rating"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <div className="relative">
              <input
                defaultValue={isShowToyUpdateForm && price}
                type="number"
                id="price"
                name="price"
                required
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter toy price"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-medium mb-2">
              Quantity
            </label>
            <div className="relative">
              <input
                defaultValue={isShowToyUpdateForm && availableQuantity}
                type="number"
                id="quantity"
                name="quantity"
                required
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter toy quantity"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="imageURL"
              className="block text-gray-700 font-medium mb-2">
              Toy image url
            </label>
            <div className="relative">
              <input
                defaultValue={isShowToyUpdateForm && pictureUrl}
                type="text"
                id="imageURL"
                name="imageURL"
                required
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter toy image url"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="toyDescription"
              className="block text-gray-700 font-medium mb-2">
              Toy description
            </label>
            <div className="relative">
              <textarea
                defaultValue={isShowToyUpdateForm && detailDescription}
                type="text"
                id="toyDescription"
                name="toyDescription"
                required
                className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
                placeholder="Enter toy description"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          {isShowToyUpdateForm && (
            <button
              onClick={handleUpdateOrCancelForm}
              className="h-10 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
              Cancel Update
            </button>
          )}
          <button
            type="submit"
            className="h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ">
            {isShowToyUpdateForm ? "Update Toy" : "Add Toy"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToyForm;

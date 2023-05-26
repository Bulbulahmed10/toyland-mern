import React, { useContext, useEffect, useState } from "react";
import ToyCard from "../toyCard/ToyCard";

const YourChoice = () => {
  const [allToy, setAllToy] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("marvel");
  useEffect(() => {
    fetch("https://toyland-server-two.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);
  const categoryNames = [
    ...new Set(allToy && allToy.map((obj) => obj.subCategory)),
  ];
  const handleClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredCategory = selectedCategory
    ? allToy.filter((obj) => obj.subCategory === selectedCategory)
    : [];

  return (
    <div>
      <div className="mt-16">
        <h2 className="text-center text-3xl tracking-wide">Your Choice</h2>
        <p className="text-center text-blue-500 mb-10">
          Choose Your Favorite toy
        </p>
      </div>
      <div className="flex flex-wrap ml-2 gap-4 ">
        {categoryNames.length > 0 &&
          categoryNames.map((categoryName, index) => {
            return (
              <button
                data-aos="zoom-in"
                key={index}
                onClick={() => handleClick(categoryName)}
                className={`btn border-none${
                  selectedCategory === categoryName && "bg-red-500"
                }`}>
                {categoryName}
              </button>
            );
          })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mx-3 md:mx-0">
        {filteredCategory.length > 0 &&
          filteredCategory.map((categoryToyCard) => (
            <ToyCard
              key={categoryToyCard._id}
              categoryToyCard={categoryToyCard}
            />
          ))}
      </div>
    </div>
  );
};

export default YourChoice;

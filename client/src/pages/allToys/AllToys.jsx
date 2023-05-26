import React, { useEffect, useState } from "react";
import ToyItemCard from "../../components/toyItemCard/ToyItemCard";
import { BsSearch } from "react-icons/bs";
const AllToys = () => {
  const [allToy, setAllToy] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(20);
  const [searchValue, setSearchValue] = useState("");
  const [isNoSearchResult, setIsNoSearchResult] = useState(false);

  const totalPage = Math.ceil(totalQuantity / itemsPerPage);
  const options = [20, 25, 30];
  const pagesNumber = [...Array(totalPage).keys()];

  const handleSelectChange = (e) => {
    setItemPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  useEffect(() => {
    fetch(
      `https://toyland-server-two.vercel.app/allToys?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    fetch("https://toyland-server-two.vercel.app/allToyQuantity")
      .then((res) => res.json())
      .then((data) => setTotalQuantity(data.result));
  });

  const handleSearch = () => {
    fetch(
      `https://toyland-server-two.vercel.app/toySearchWithName/${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length < 1) {
          setIsNoSearchResult(true);
        } else {
          setIsNoSearchResult(false);
        }
        setAllToy(data);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-3 my-6 mx-4 md:mx-0">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          name="search"
          id=""
          className="border h-12 rounded-md text-lg px-2 w-72 focus:outline-blue-700"
          placeholder="search toy "
        />
        <button onClick={handleSearch} className="rounded-md btn btn-outline">
          <BsSearch className="text-2xl " />
        </button>
      </div>

      {isNoSearchResult && (
        <h4 className="text-lg text-center font-mono font-bold text-red-500">
          No search item found
        </h4>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 md:mx-0 gap-4">
        {allToy.length > 0 &&
          allToy.map((categoryToyCard) => (
            <ToyItemCard
              key={categoryToyCard._id}
              categoryToyCard={categoryToyCard}
            />
          ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        {pagesNumber.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            key={number}
            className={`btn btn-outline ${
              currentPage === number ? "bg-yellow-300" : ""
            }`}>
            {number}
          </button>
        ))}
        <select
          className="border px-2 py-3 cursor-pointer"
          value={itemsPerPage}
          onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default AllToys;

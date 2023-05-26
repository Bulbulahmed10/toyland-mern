import React, { useContext, useEffect, useState } from "react";
import { AuthContextProvider } from "../../context/AuthContext";
import MyToyInfoTable from "../../components/myToyInfoTable/MyToyInfoTable";
import { toast } from "react-hot-toast";
import toastConfig from "../../utilities/toastConfig";
import ToyForm from "../../components/shared/toyForm/ToyForm";
import Swal from "sweetalert2";
const MyToy = () => {
  const { user } = useContext(AuthContextProvider);
  const [myToys, setMyToys] = useState([]);
  const [isShowToyUpdateForm, setIsShowToyUpdateForm] = useState(false);
  const [updateToyItemInfo, setUpdateToyItemInfo] = useState({});
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://toyland-server-two.vercel.app/sellerProduct/${user?.email}/toys?value=${selected}`
      )
        .then((res) => res.json())
        .then((data) => setMyToys(data));
    }
  }, [selected]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://toyland-server-two.vercel.app/sellerToy/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMyToys(data));
    }
  }, [user?.email]);

  const handleToyDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toyland-server-two.vercel.app/allToy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Toy deleted successfully", toastConfig);
              const remainingToy = myToys.filter(
                (toyItem) => toyItem._id !== _id
              );
              setMyToys(remainingToy);
            }
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleUpdateToy = (_id) => {
    setIsShowToyUpdateForm(true);
    const findToyItem = myToys.find((toyItem) => toyItem._id === _id);
    setUpdateToyItemInfo(findToyItem);
  };

  const handleUpdateOrCancelForm = () => {
    setIsShowToyUpdateForm(false);
  };

  return (
    <>
      <div className="flex items-center justify-end mx-2 md:mx-0">
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="select select-info w-full max-w-xs mt-8 ">
          <option disabled selected>
            Sort by price
          </option>
          <option value="low">Low Price</option>
          <option value="high">High Price</option>
        </select>
      </div>

      {isShowToyUpdateForm && (
        <ToyForm
          isShowToyUpdateForm={isShowToyUpdateForm}
          handleUpdateOrCancelForm={handleUpdateOrCancelForm}
          setIsShowToyUpdateForm={setIsShowToyUpdateForm}
          updateToyItemInfo={updateToyItemInfo}
        />
      )}
      {myToys.length > 0 ? (
        <div className="overflow-x-auto w-full mt-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Toy Name</th>
                <th>Subcategory</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myToys?.length > 0 &&
                myToys.map((singleToy, index) => (
                  <MyToyInfoTable
                    key={singleToy._id}
                    singleToy={singleToy}
                    index={index}
                    handleToyDelete={handleToyDelete}
                    handleUpdateToy={handleUpdateToy}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h4 className="text-xl text-center mt-6 text-red-700 font-bold">
            You have no toys{" "}
          </h4>
        </div>
      )}
    </>
  );
};

export default MyToy;

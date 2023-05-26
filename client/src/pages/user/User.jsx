import React, { useContext } from "react";
import { AuthContextProvider } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { logOut, user } = useContext(AuthContextProvider);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full bg-white shadow-md mt-10">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <img
              data-aos="zoom-in"
              src={user && user?.photoURL}
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex items-center gap-2">
              <h1
                data-aos="zoom-out"
                className="text-3xl font-bold text-gray-800 mb-2">
                {user && user?.displayName}
              </h1>
            </div>
            <p className="font-mono text-blue-400 -mt-2">
              {user && user.email}
            </p>
            <p className=" text-blue-400">
              User ID: <span className="font-mono">{user && user.uid}</span>
            </p>
            <button
              data-aos="fade-right"
              onClick={handleLogout}
              className="font-mono  border-2 py-2 px-6 border-red-500 text-lg mt-4 rounded-md font-semibold tracking-wider hover:bg-red-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

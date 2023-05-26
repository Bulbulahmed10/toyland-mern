import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import firebaseErrorEdit from "../../utilities/firebaseErrorEdit";
import toastConfig from "../../utilities/toastConfig";
import { toast } from "react-hot-toast";

const Register = () => {
  const { user, setUser, registerUser, updateUser } =
    useContext(AuthContextProvider);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;

    if (password.length > 5) {
      registerUser(email, password)
        .then(() => {
          setUser(null);
          updateUser(name, photoURL)
            .then(() => {})
            .catch((err) => {
              console.log(err);
            });
          toast.success("Registration successful!", toastConfig);
          navigate("/login");
        })
        .catch((err) => {
          const firebaseAlert = firebaseErrorEdit(err);
          toast.error(firebaseAlert, toastConfig);
        });
    } else {
      toast.error("Password must be at least 6 characters", toastConfig);
    }
  };

  return (
    <div className=" mt-16 grid  lg:grid-cols-2 gap-8 ">
      <img
        className="rounded-md hidden lg:block"
        src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        alt=""
      />

      <form
        onSubmit={handleRegistration}
        className="bg-white shadow-md rounded-lg px-8 h-fit py-6 mt-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={isPasswordShow ? "text" : "password"}
              id="password"
              name="password"
              required
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter your password"
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={handleTogglePassword}>
              {isPasswordShow ? <FiEye /> : <FiEyeOff />}
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="photoUrl"
            className="block text-gray-700 font-medium mb-2">
            Avatar Link
            <span className="text-sm font-Raleway ml-2 font-semibold tracking-wider"></span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              required
              className="w-full border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg py-2 px-4"
              placeholder="Enter your avatar link"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ">
          Register
        </button>
        <div className="text-center mt-4">
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 text-sm">
            Have an account? Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

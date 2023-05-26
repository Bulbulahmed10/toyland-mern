import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import toastConfig from "../../utilities/toastConfig";
import firebaseErrorEdit from "../../utilities/firebaseErrorEdit";
const Login = () => {
  const { setUser, googleLoginIn, loginUser } = useContext(AuthContextProvider);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const handleGoogleLogin = () => {
    googleLoginIn().then((result) => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
      navigate(from, { replace: true });
    });
  };

  const handleLogin = (e) => {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
        toast.success("Login successful", toastConfig);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const firebaseError = firebaseErrorEdit(err);
        toast.error(firebaseError, toastConfig);
      });
  };

  return (
    <div className=" mt-16 grid lg:grid-cols-2 gap-8 ">
      <img
        className="rounded-md mt-3 hidden lg:block"
        src="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
        alt=""
      />
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-lg px-8 h-fit py-6 mt-3">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
        <button
          type="submit"
          className="w-full h-10 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ">
          Login
        </button>
        <div
          onClick={handleGoogleLogin}
          className="flex items-center my-4 justify-between w-[300px] mx-auto border p-2 rounded-md cursor-pointer hover:bg-slate-100 text-blue-500">
          <p>Login in with Google</p>
          <FcGoogle className="text-2xl" />
        </div>
        <div className="text-center mt-4">
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-600 text-sm">
            Don't Have an account? Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

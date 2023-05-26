import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";

import ActiveLink from "./Navbar/ActiveLink";
const Header = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Toyland | HOME";
    } else {
      document.title = `Toyland  ${location.pathname
        .replace("/", "| ")
        .toUpperCase()}`;
    }

    if (location.state) {
      document.title = location.state;
    }
  }, [location.pathname]);

  const { user } = useContext(AuthContextProvider);

  return (
    <div className="navbar bg-base-100 mt-6">
      <div className="navbar-start ">
        <div className="hidden lg:block">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img className="w-14 h-14" src={logo} alt="" />
              <span className="text-3xl font-bold tracking-widest font-StyleScript text-[#ef0909]">
                Toyland
              </span>
            </div>
          </Link>
        </div>

        <div className="dropdown block md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allToys">All Toys</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/myToy">My Toy</Link>
                </li>
                <li>
                  <Link to="/addToy">Add Toy</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:block">
        <nav>
          <Navbar />
        </nav>
      </div>
      <div className="navbar-end">
        {!user && (
          <div>
            <ActiveLink to="/login">Sign in</ActiveLink>
            <ActiveLink to="/register">Register</ActiveLink>
          </div>
        )}
        {user && (
          <div className="flex items-center ">
            <div className="hidden lg:block">
              <ActiveLink to="/myToy">My Toy</ActiveLink>
              <ActiveLink to="/addToy">Add Toy</ActiveLink>
            </div>
            <Link className="ml-4" to="/user">
              <div
                className="tooltip tooltip-hover tooltip-bottom"
                data-tip={user?.displayName}>
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src={user?.photoURL && user.photoURL}
                  alt=""
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

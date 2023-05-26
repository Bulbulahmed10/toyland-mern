import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "lg:ml-8 bg-[#FF5B5B] px-3 py-1 lg:px-4 lg:py-2 text-white tracking-wider rounded-md"
          : "lg:ml-8 px-3 py-1 lg:px-4 lg:py-2 text-black tracking-wider rounded-md "
      }>
      {children}
    </NavLink>
  );
};

export default ActiveLink;

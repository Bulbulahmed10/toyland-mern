import React from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className="flex items-center ">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/blog">Blog</ActiveLink>
      <ActiveLink to="/allToys">All Toys</ActiveLink>
    </div>
  );
};

export default Navbar;

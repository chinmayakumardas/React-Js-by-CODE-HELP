import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#0F172A] py-2">
      <div className="flex text-white text-2xl flex-row justify-around items-center">
        <NavLink to="/">
          <div>
            <img
              className="h-auto w-[150px]"
              src="https://github.com/priyansh70/Dot-Batch_WebDevelopment-Notes/blob/main/React/03%20-%20React%20Advanced/shopapp%20redux/public/logo.png?raw=true"
            ></img>
          </div>
        </NavLink>
        <div className="flex gap-6 justify-between items-center">
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/cart'>
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

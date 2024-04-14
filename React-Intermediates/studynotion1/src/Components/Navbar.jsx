import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar(props) {
  const { isLoggedIn, setIsLoggedIn } = props; // Destructure props

  return (
    <div className=" flex flex-1 justify-between w-11/12 max-w-[1116px] items-center text-3xl">
      <Link to="/">
        <img src={logo} alt="textlogo" width={160} height={32} loading="lazy" />
      </Link>
      <nav className="">
        <ul className="text-white flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center ml-5 mr-3 gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">
              Signup
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100  py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">Dashboard</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 "
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              LogOut
            </button>
          </Link>
        )}
       
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div className="navigation flex items-center p-6">
      <div className="header text-3xl text-center md:px-6 tracking-wide font-archivo-black">
        matilda
      </div>
      <div className="nav--bar w-full block flex-grow flex items-center md:px-20 my-2 text-sm my-0 font-semibold font-color:black tracking-wide pb-1">
        <Link to="/"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        >
          Home
        </Link>
        <Link to="/signup"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        >
          Sign Up
        </Link>
        <Link to="/login"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        >
          Login
        </Link>
        <Link to="/shop"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        > Shop
        </Link>
        <Link to="/cart"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        > <FaShoppingCart />
        </Link>
       
      </div>
    </div>
  );
}

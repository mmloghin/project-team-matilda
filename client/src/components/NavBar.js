import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export default function NavBar() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="navigation flex items-center p-6">
      <h1 className="header font-semibold text-5xl text-center md:px-6 tracking-wide font-indie-flower">
        matilda
      </h1>

      <div className="nav--bar ml-16 w-full block flex-grow flex items-center md:px-20 my-2 text-sm my-0 font-semibold font-color:black tracking-wide pb-1 py-2">
        <Link to="/"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        >
          Home
        </Link>
        <Link to="/login"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        >
          Account
        </Link>

        <Link to="/shop"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500"
        >
          Shop
        </Link>

        <Link to="/cart"
          className="mx-10 border-b-2 border-transparent hover:border-yellow-500 flex items-center gap-1"
        >
          <FaShoppingCart />
          {basket?.length}
        </Link>

        <Link to="/signup"
          className="ml-72 border-b-2 border-transparent text-white bg-gradient-to-br from-indigo-400 to-indigo-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-10 py-2 text-center mr-2 mb-2"
        >
          Sign Up
        </Link>

      </div>
    </div>
  );
}

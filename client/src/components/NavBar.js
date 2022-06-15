import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Header from "../components/Header";
// import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navigation flex items-center p-6">
      <Header />
      <div className="nav--bar w-full block flex-grow lg:flex lg:items-center lg:w-auto md:px-20 text-sm text-lg my-2 lg:text-sm lg:my-0 font-semibold font-color:black tracking-wide pb-1">
        <a
          href="/"
          className="lg:mx-10 border-b-2 border-transparent hover:border-green-500"
        >
          Home
        </a>
        <a
          href="/signup"
          className="lg:mx-10 border-b-2 border-transparent hover:border-green-500"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="lg:mx-10 border-b-2 border-transparent hover:border-green-500"
        >
          Login
        </a>
        <a
          href="/cart"
          className="lg:mx-10 border-b-2 border-transparent hover:border-green-500"
        >
          <FaShoppingCart />
        </a>
      </div>
    </div>

    /* <nav className="navigation flex items-center p-6">
<div className="header text-3xl text-center md:px-12 font-bold tracking-wide">
  matilda
</div>
<div className="nav--bar w-full block flex-grow lg:flex lg:items-center lg:w-auto md:px-20 text-sm text-lg my-2 lg:text-sm lg:my-0 font-semibold font-color:black tracking-wide pb-1">
  <Link
    to="/"
    className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
  >
    Home
  </Link>
  <Link
    to="/signup"
    className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
  >
    Sign Up
  </Link>
  <Link
    to="/login"
    className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
  >
    Login
  </Link>
  <Link
    to="/cart"
    className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
  >
    Cart
  </Link>
</div>
</nav> */
  );
}

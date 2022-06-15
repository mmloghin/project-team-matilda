import React from "react";

export default function NavBar() {
  return (
    <nav className="navigation flex items-center p-6">
      <div className="header text-3xl text-center md:px-12 font-bold tracking-wide">
        matilda
      </div>
      <div className="nav--bar w-full block flex-grow lg:flex lg:items-center lg:w-auto md:px-20 text-sm text-lg my-2 lg:text-sm lg:my-0 font-semibold font-color:black tracking-wide pb-1">
        <a
          href="#"
          className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
        >
          About
        </a>
        <a
          href="#"
          className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
        >
          Sign Up
        </a>
        <a
          href="#"
          className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
        >
          Login
        </a>
        <a
          href="#"
          className="lg:mx-6 border-b-2 border-transparent hover:border-green-500"
        >
          Cart
        </a>
      </div>
    </nav>
  );
}

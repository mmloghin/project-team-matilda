import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container -mx-4 flex flex-col lg:flex-row bg-gray-100">
      <div className="left--column ml-8 mr-8 pl-10 py-8">
        <div className="main--content mt-24 mb-24 flex flex-col sm:items-center lg:items-stretch">
          <div className="heading text-3xl sm:text-5xl md:text-6xl font-black leading-none">
            Buy books
            <div className="text-purple-500">for kids.</div>
          </div>
          <div className="description max-w-md my-5 text-lg leading-loose">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </div>
          <button className="text-center inline-block w-full sm:w-48 py-3 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300 bg-purple-400 text-gray-100 hover:bg-purple-500">
            Shop Now
          </button>
        </div>
      </div>
       <Link to="/shop" className="right--column bg-purple-200 bg-cover bg-center ml-24 h-96 h-auto w-1/2 flex-1 bg-[url('https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></Link>
    </div>
  );
}

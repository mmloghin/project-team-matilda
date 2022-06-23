import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container -mx-4 flex flex-col lg:flex-row">
      <div className="left--column ml-8 mr-8 pl-10 py-8">
        <div className="main--content mt-24 mb-24 flex flex-col sm:items-center lg:items-stretch">
          <div className="heading text-3xl sm:text-5xl md:text-6xl font-black leading-none">
            Buy books
            <div className="text-blue-500">for kids.</div>
          </div>
          <div className="description max-w-md my-5 text-lg leading-loose">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </div>
          <Link to="/shop" className="text-center inline-block w-full sm:w-48 py-3 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300 bg-blue-400 text-gray-100 hover:bg-blue-500">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="right--column bg-blue-200 bg-cover bg-center ml-24 h-96 h-auto w-1/2 flex-1 bg-[url('https://res.cloudinary.com/done3n9hm/image/upload/v1655927183/hero_iggb4s.webp')]"></div>
    </div>
  );
}

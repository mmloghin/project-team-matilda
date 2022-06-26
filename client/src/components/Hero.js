import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mx-1 flex flex-col lg:flex-row">
      <div className="left--column ml-4 mr-8 pl-10 py-8">
        <div className="main--content mt-24 mb-24 flex flex-col sm:items-center lg:items-stretch">
          <div className="heading text-3xl sm:text-5xl md:text-6xl font-black leading-none">
            Amazing books
            <div className="text-blue-500">for children</div>
            <div className="text-blue-400">& young adults.</div>
          </div>
          <div className="description max-w-md my-5 text-lg leading-loose">
          Reading nurtures the imagination and sparks creativity. Explore our wide collection of modern and classic literature - pick your next book today & start a new adventure!
          </div>
          <Link to="/shop" className="text-center inline-block w-full sm:w-48 py-3 font-semibold tracking-wide border-b-2 border-transparent text-white bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="right--column bg-blue-200 bg-cover bg-center ml-24 h-96 h-auto w-1/2 flex-1 bg-[url('https://res.cloudinary.com/done3n9hm/image/upload/v1655927183/hero_iggb4s.webp')]"></div>
    </div>
  );
}

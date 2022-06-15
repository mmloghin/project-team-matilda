import React from "react";

export default function Hero() {
  return (
    <div className="container -mx-4">
      <div className="main--column flex flex-col lg:flex-row bg-gray-100">
        <div className="left--column ml-8 mr-8 xl:pl-10 py-8">
          <div className="main--content mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch">
            <div className="heading text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none">
              Buy books
              <wbr />
              <br />
              <span className="text-green-400">for kids.</span>
            </div>
            <div className="description max-w-md lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
            <div className="button text-center inline-block w-full sm:w-48 py-3 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300 bg-green-500 text-gray-100 hover:bg-green-600">
              Recommended
            </div>
          </div>
        </div>
        <div className="right--column bg-green-200 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1 bg-[url('https://images.unsplash.com/photo-1591951425328-48c1fe7179cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
      </div>
    </div>
  );
}

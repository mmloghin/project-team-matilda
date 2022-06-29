import React from "react";
import Product from "../components/Product";

export default function Featured(props) {

  return (
    <div className="container max-w-screen-xl mx-auto lg:py-24">
      <div className="heading text-4xl sm:text-4xl font-black tracking-wide text-center mb-8">
        Featured Books
      </div>

      <div className="flex flex-col items-center lg:items-stretch lg:flex-row">

        {props.featuredBooks.map((book) => (
          <div className="cards mt-5 lg:w-1/5 xl:mx-4 rounded-md overflow-hidden"
            key={book.id}>
            <Product book={book} />
          </div>
        ))}
        
      </div>

    </div>
  );
}


import React, { useState, useEffect } from "react";
import Product from "../components/Product";

export default function Featured(props) {

  const featuredBooks = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1170803558l/72193.jpg",
      author: "J.K. Rowling",
      price: 1.50
    },
    {
      id: 2,
      title: "The Wind in the Willows",
      image: "https://images-na.ssl-images-amazon.com/images/I/41Qrn0+vHJL._SX323_BO1,204,203,200_.jpg",
      author: "Kenneth Grahame",
      price: 4.99
    },
    {
      id: 3,
      title: "Charlie and the Chocolate Factory",
      image: "https://images-na.ssl-images-amazon.com/images/I/51wzNsEFyWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      author: "Roald Dahl",
      price: 1.20
    },
    {
      id: 4,
      title: "Alice's Adventures in Wonderland",
      image: "https://www.popularlibros.com/imagenes.webp_grandes/9781447/978144727999.webp",
      author: "Lewis Carroll",
      price: 3.75
    }
  ]

  return (

    <div className="container max-w-screen-xl mx-auto lg:py-24">
      <div className="heading text-4xl sm:text-4xl font-black tracking-wide text-center mb-8">
        Featured Books
      </div>

      <div className="flex flex-col items-center lg:items-stretch lg:flex-row">

        {featuredBooks.map((book) => (
          <div className="cards mt-5 lg:w-1/5 xl:mx-4 rounded-md overflow-hidden"
            key={book.id}>
            <Product book={book} />
          </div>
        ))}
        
      </div>

    </div>
  );
}


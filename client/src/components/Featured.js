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
    },
    {
      id: 5,
      title: "How the Grinch Stole Christmas",
      image: "https://images.cdn1.buscalibre.com/fit-in/360x360/07/9d/079d73be3c83f2b21263a0eddcd534dc.jpg",
      author: "Dr.Seuss",
      price: 3.75
    },
    {
      id: 6,
      title: "Matilda",
      image: "https://kbimages1-a.akamaihd.net/3c028f3e-c91b-4b60-8e3a-0fe7b56365b8/1200/1200/False/matilda-2.jpg",
      author: "Roald Dahl",
      price: 2.75
    },
    {
      id: 7,
      title: "The Chronicles of Narnia",
      image: "https://images-na.ssl-images-amazon.com/images/I/71kkZJGvq5L.jpg",
      author: "Lewis",
      price: 3.75
    },
    {
      id: 8,
      title: "The Hobbit",
      image: "https://images-na.ssl-images-amazon.com/images/I/710+HcoP38L.jpg",
      author: "Tolkien",
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


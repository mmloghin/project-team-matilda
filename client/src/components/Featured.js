import React from "react";
import Product from "../components/Product";

export default function Featured() {
  const books = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      image: "https://pictures.abebooks.com/isbn/9780747532699-es.jpg",
      price: 5.95
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      image: "https://i.ebayimg.com/images/g/-QkAAOSw1DlgjpGq/s-l500.jpg",
      price: 6.95
    },
    {
      id: 3,
      title: "Harry Potter and Prisoner of Azkaban",
      image: "https://pictures.abebooks.com/isbn/9780747542155-es.jpg",
      price: 3.57
    },
    {
      id: 4,
      title: "Charlie and the Chocolate Factory",
      image: "https://images-na.ssl-images-amazon.com/images/I/91e3-T2IrdL.jpg",
      price: 5.66
    },
  ];

  return (
    <div className="featured--container max-w-screen-lg mx-auto py-20 lg:py-24">
      <div className="books--heading text-4xl sm:text-4xl font-black tracking-wide text-center mt-0 mb-8">
        Featured Books
      </div>
      {books.map((book, index) => (
        <div className="cards mt-10 w-full lg:w-1/2 sm:pr-10 md:pr-6 lg:pr-22 inline-grid grid-cols-3 gap-4" key={index}>
          <div className="title text-1xl font-bold"> {book.title} </div>
          <img src={book.image} alt="images" />
          <Product />
        </div>
      ))}
    </div>
  );
}


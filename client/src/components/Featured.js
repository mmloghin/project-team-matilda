import React from "react";
import Product from "../components/Product";
import Banner from '../Banner.png';

export default function Featured() {
  const books = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      image: "https://pictures.abebooks.com/isbn/9780747532699-es.jpg",
      // category: "Detective",
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      image: "https://i.ebayimg.com/images/g/-QkAAOSw1DlgjpGq/s-l500.jpg",
      // category: "Fantasy",
    },
    {
      id: 3,
      title: "Harry Potter and Prisoner of Azkaban",
      image: "https://pictures.abebooks.com/isbn/9780747542155-es.jpg",
      // category: "Animals",
    },
    {
      id: 4,
      title: "Charlie and the Chocolate Factory",
      image: "https://images-na.ssl-images-amazon.com/images/I/91e3-T2IrdL.jpg",
      // category: "Pictures",
    },
  ];

  return (
    <div className="featured--container items-center">
      <div className="books--heading text-4xl sm:text-4xl font-black tracking-wide text-center mt-8 mb-8">
        Featured Books
        <img className="featured--image mt-8" alt="featured" src={Banner} />
      </div>
      {books.map((book, index) => (
        <div className="cards my-20 h-full flex-col sm:border max-w-sm relative focus:outline-none flex flex-col sm:items-center" key={index}>
          {book.title}
          <img src={book.image} alt="images" />
          <Product />
        </div>
      ))}
    </div>
  );
}


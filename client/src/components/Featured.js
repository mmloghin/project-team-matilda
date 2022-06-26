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
      title: "The Wind in the Willows",
      image: "https://images-na.ssl-images-amazon.com/images/I/91auA-sgk6L.jpg",
      price: 5.95
    },
    {
      id: 3,
      title: "Charlie and the Chocolate Factory",
      image: "https://images-na.ssl-images-amazon.com/images/I/91e3-T2IrdL.jpg",
      price: 5.66
    },
    {
      id: 4,
      title: "Alice's Adventures in Wonderland",
      image: "https://www.popularlibros.com/imagenes.webp_grandes/9781447/978144727999.webp",
      price: 2.95
    },
    {
      id: 5,
      title: "How the Grinch Stole Christmas",
      image: "https://pictures.abebooks.com/isbn/9780007170241-es.jpg",
      price: 1.95
    },
    {
      id: 6,
      title: "The Lion, The Witch and The Wardrobe",
      image: "https://anylang.net/sites/default/files/covers/a0c39048873339.58a470c427a06.jpg",
      price: 5.55
    },
  ];

  return (
    <div className="featured--container max-w-screen-lg mx-auto py-20 lg:py-24">
      <div className="books--heading text-4xl sm:text-4xl font-black tracking-wide text-center mt-0 mb-8">
        Featured Books
      </div>
      {books.map((book, index) => (
        <div className="cards mt-10 w-full lg:w-1/2 sm:pr-10 md:pr-6 lg:pr-22 inline-grid grid-cols-3 gap-4" key={index}>
          <Product book={book} />
        </div>
      ))}
    </div>
  );
}


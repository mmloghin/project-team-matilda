import React from "react";

export default function Featured() {
  const books = [
    {
      id: 1,
      title: "",
      image: "",
      category: "Detective",
    },
    {
      id: 2,
      title: "",
      image: "",
      category: "Fantasy",
    },
    {
      id: 3,
      title: "",
      image: "",
      category: "Animals",
    },
    {
      id: 4,
      title: "",
      image: "",
      category: "Pictures",
    },
  ];

  return (
    <div className="categories--container">
      <div className="books--heading text-4xl sm:text-4xl font-black tracking-wide text-center mt-8">
        Featured Books
      </div>
      {books.map((book, index) => (
        <div className="cards text-center my-20" key={index}>
          {book.category}
        </div>
      ))}
    </div>
  );
}


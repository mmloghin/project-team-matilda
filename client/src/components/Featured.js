import React from "react";

export default function Featured() {
  const books = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      image: "https://pictures.abebooks.com/isbn/9780747532699-es.jpg",
      category: "Detective",
    },
    {
      id: 2,
      title: "Title 2",
      image: "",
      category: "Fantasy",
    },
    {
      id: 3,
      title: "Title 3",
      image: "",
      category: "Animals",
    },
    {
      id: 4,
      title: "Title 4",
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
          {book.title}
        </div>
      ))}
    </div>
  );
}


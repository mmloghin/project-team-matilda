import React from "react";

export default function Home() {
  const books = [
    {
      image: "",
      category: "Detective",
    },
    {
      image: "",
      category: "Fantasy",
    },
    {
      image: "",
      category: "Animals",
    },
    {
      image: "",
      category: "Pictures",
    },
  ];

  return (
    <div className="categories--container relative flex flex-col items-center sm:items-stretch sm:flex-column justify-between mt-8">
      <div className="books--heading text-4xl sm:text-5xl font-black tracking-wide text-center mt-8">
        Categories
      </div>
    </div>
  );
}

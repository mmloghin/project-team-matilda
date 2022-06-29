import React, {useState, useEffect} from "react";
import Hero from "../components/Hero";
// import Recommended from "../components/Recommended";
import Featured from "../components/Featured";

export default function Home(props) {

  let [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    displayFeaturedBooks();
  }, []);

  const displayFeaturedBooks = () => {
      fetch('/books/featured')
          .then(response => response.json())
          .then(featuredBooks => {
              setFeaturedBooks(featuredBooks);
          })
          .catch(error => {
              console.log(error);
          });
  };

  return (
    <div>
      <Hero />
      <Featured featuredBooks={featuredBooks} />
    </div>
  );
}

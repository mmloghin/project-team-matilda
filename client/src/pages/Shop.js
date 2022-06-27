import React, {useState, useEffect} from "react";
import Catalogue from "../components/Catalogue";
import { MdLibraryBooks } from "react-icons/md";

export default function Shop() {

  let [books, setBooks] = useState([]);

  useEffect(() => {
    displayBooks();
  }, []);

  const displayBooks = () => {
      fetch('/books')
          .then(response => response.json())
          .then(books => {
              setBooks(books);
          })
          .catch(error => {
              console.log(error);
          });
  };

  return (

    <div>

      <div className="content mt-10 flex flex-col items-center p-6 sm:p-6">
          <h2 className="heading text-2xl xl:text-3xl font-extrabold">
            Shop         
          </h2>
          <p className="mt-10 text-base text-center">Sail the open seas, become a powerful wizard, and even rule over magical lands. Turn the page, your next adventure awaits!</p>
      </div>
        
      <Catalogue books={books} />

    </div>
      
  );
}; 
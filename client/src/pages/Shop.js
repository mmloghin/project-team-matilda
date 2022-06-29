import React, {useState, useEffect} from "react";
import Catalogue from "../components/Catalogue";
import ShopHeader from "../images/MatildaShopImage.png";

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
      <div>
          <h2 className="heading mt-18 text-2xl xl:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-800">
            Shop
          </h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 text-left">          
          <p className="ml-40 mt-20 text-base">Sail the open seas, become a powerful wizard, and even rule over magical lands.</p><br/>
          <p className="ml-40 mt-1 text-base">Turn the page, open your imagination.</p><br/>
          <p className="ml-40 mt-1 font-semibold">Your next adventure awaits!</p>
        </div>
        <div className="col-span-1 justify-center mr-40">
          <img 
            className="object-scale-down scale-75"
            src={ShopHeader}
            alt="shop-header" 
          />
        </div>
      </div>

      <div>
        <Catalogue books={books} />
      </div>

    </div>

  );
}; 
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

function App(){

  const [books, setBooks] = useState([]);

  useEffect(() => {
    displayBooks();
  }, []);

  const displayBooks = () => {
      fetch('/books')
          .then(response => response.json())
          .then(users => {
              setBooks(books);
          })
          .catch(error => {
              console.log(error);
          });
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home books={books} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop books={books} />} />
        <Route path="/cart" element={<Cart books={books} />} />
      </Routes>
      < Footer />
    </div>
  );
}

export default App;

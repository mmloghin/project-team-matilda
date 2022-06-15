import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import tw from "twin.macro";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Home  />
      <Footer/>
    </div>
  );
}

export default App;

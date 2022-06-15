import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
// import tw from "twin.macro";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

function App() {
  return (
    <div>   
      <NavBar />
      <Home />
      {/* <BrowserRouter>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
			</BrowserRouter> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;

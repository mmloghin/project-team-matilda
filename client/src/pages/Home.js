import React, {useState, useEffect} from "react";
import Hero from "../components/Hero";
// import Recommended from "../components/Recommended";
import Featured from "../components/Featured";

export default function Home(props) {

  return (
    <div>
      <Hero />
      <Featured />
    </div>
  );
}

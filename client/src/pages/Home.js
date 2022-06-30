import React, {useState, useEffect} from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";

export default function Home() {

  return (
    <div>
      <Hero />
      <Featured />
    </div>
  );
}
